const express = require('express');// Import exprerss.js
const app = express(); //The app object conventionally denotes the Express application. Create it by 
//const cors = require('cors');
//const http = require('http').Server(app);
const server = require('http').createServer(app);     
const http = require('http').Server(app);
const bodyParser = require('body-parser'); //create an instance of body-parser
const cors = require('cors'); //allow Cross site origin requests
const MongoClient = require('mongodb').MongoClient;  // require MongoClient functionality
var  ObjectID = require('mongodb').ObjectID; //require ObjectID functionality
const io = require('socket.io').listen(server);
const sockets = require('./socket.js');
//const sockets = require('./socket.js');
               //calling the top-level express() function exported by the Express module.

users = [];
connections = []; //save users and connections

server.listen(process.env.PORT || 3000); // set up the port

console.log('server running on port 3000.');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index1.html');//post the chat page via the link
});

io.sockets.on('connection', function(socket){
    connections.push(socket); 
    console.log('User Connected: %s online', connections.length);     //display the connection leagth, how many users          

    socket.on('disconnect', function(data){
        if(socket.username){
            users.splice(users.indexOf(socket.username), 1);
            updateUsers();
        }
        connections.splice(connections.indexOf(socket), 1);
        console.log('User disconneted: %s online', connections.length);//display the disconnection leagth, how many users disconnection
    });

    socket.on('send message', function(data){
        io.sockets.emit('new message', {msg:data, user: socket.username});
    });

    socket.on('new user', function(data, callback){
        if(users.indexOf(data) != -1){
            callback(false);
        }else {
            callback(true);
            socket.username = data;
            users.push(socket.username);
            updateUsers();
        }
        
    });

    function updateUsers(){
        io.sockets.emit('get users', users);
    }


    socket.on('user image', function (data) {
        console.log(data);
        socket.broadcast.emit('user image', {user:socket.username, msg:data});  //server receives the images
      });
      
});

app.use(cors());
app.use (bodyParser.json()); //Mounts the specified middleware function
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize:10,useNewUrlParser: true,useUnifiedTopology: true},function(err, client) {
    //Callback function code. When we have a connection start the rest of the app.
    if (err) {return console.log(err)}
        const dbName = 'mydb';
        const db = client.db(dbName);
        sockets.connect(app, io,db);
        require('./routes/api-add.js')(db,app);
        //require('./routes/api-prodcount.js')(db,app);
        require('./routes/api-validid.js')(db,app);
        //require('./routes/api-getlist.js')(db,app);
        require('./routes/api-getitem.js')(db,app,ObjectID);
        require('./routes/api-update.js')(db,app,ObjectID);
        require('./routes/api-deleteitem.js')(db,app,ObjectID);
        
    //Start the server listening on port 3000. Outputs message to console once server has started.(diagnostic only)
    require('./listen.js')(http);

});