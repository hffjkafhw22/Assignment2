# Assignment2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Describe the organisation of your Git repository and how you used it during the development of your solution
In my organisation of Git repository, which has the following structures: e2e is to test, server is to provider the server service and routes for the website running. Src is the main parts of the website and app contains the account, login, register, services and app modules. app-routing modules, app.js into the folder.

In my development stage, the Git repository is not only to be the repository to store the codes and it also records the project development stage in this time. When I developed new feature into the project or develop the feature in the series of process, I would use the Git repository to record my development history and commit.



## Description of data structures used in the client and server to represent the various entities, e.g.: users, groups, channels, etc
 
When user login the login.html via their account passwords, if they do not type the correct password, the system would display to require users to insert correct information. When users login in the account success, they would direct to the account.
In the account page, they could upload their image to the account page.
<form class="login-form">
          <input type="email" name="emailusername" id="emailusername" placeholder="emailusername" required="required" [(ngModel)]= "emailusername">
          <input type="password" name="emailpassword" id="emailpassword" placeholder="emailpassword" required="emailpassword" [(ngModel)]= "emailpassword">
          <button (click)="itemClicked()">login</button>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>
    

<form runat="server">
  <input type='file' id="imgInp" />
  <img id="blah" src="#" alt="your image" />
  <button onclick="location.href='/addaccount'" id ="addaccount" class="btn btn-primary" type="button"> Addaccount </button>

  <a href="/addaccount">Addaccount</a>
</form>

<script>function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          
          reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
          }
          
          reader.readAsDataURL(input.files[0]);
        }
      }
      
      $("#imgInp").change(function() {
        readURL(this);
      });


In the chat page, users could send image via the filebutton and transferred as the base64 to post into the chat list.

   <textarea class="form-control" id="message" placeholder="Enter Message"></textarea>
          <input type="submit" class="btn btn-primary" value="ENTER" />          
          <div class="filebutton">Send Image<input type="file" id="imagefile" class="btn btn-primary"  accept="image/*"></div>
        </div>
        
  function image (from, base64Image) {
    $('#lines').append($('<p>').append($('<b>').text(from), '<img src="' + base64Image + '"/>'));
  }

           $('#imagefile').bind('change', function(e){
      var data = e.originalEvent.target.files[0];
      var reader = new FileReader();
      reader.onload = function(evt){
        image('me', evt.target.result);
        socket.emit('user image', evt.target.result);
      };
      reader.readAsDataURL(data);





## A description of how you divided the responsibilities between client and server (you are encouraged to have the server provide a REST API which returns JSON in addition to a static directory)

For the REST API, the add part has the parameter to receive the data from the client and serve.  The const .collection to confirm the “duplicate id” and insert the input data into the collection “project”.


product = req.body;
        const collection = db.collection('products');



For the edit part, when the updateOne receives the data from the column and then update to the related part.
product = req.body;
        //console.log(req);
        var objectid = new ObjectID(product.objid);
        const collection = db.collection('products');
        collection.updateOne({_id:objectid},{$set:{name:product.name,groupunits:product.groupunits,description:product.description,channel: product.channel}},()=>{
          //Return a response to the client to let them know the delete was successful
           res.send({'ok':product.objid});


For the delete part, the server part could delete the objected from the product ID and its document. 

  productID = req.body.productid;
        //create a new mongo Object ID from the passed in _id
        var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        //Delete a single item based on its unique ID.
        collection.deleteOne({_id:objectid},(err,docs)=>{



JSON transfers the  getitem from the object to the character and then transfer these document.
app.use (bodyParser.json()); //Mounts the specified middleware function

this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));  
    if(this.currentUser){
      this.email = this.currentUser.email;
      this.username = this.currentUser.username;
      this.birthdate = this.currentUser.birthdate;
      this.age = this.currentUser.age;





##  A list of routes, parameters, return values, and purpose

The routes has the api-add.js to process the add service when superadministrator, api-deleteitem.js is to delete the document; api-getitem is to create new users. Api-update.js is to edit the original part and then update it.

## Angular architecture: components, services, models, routes
Angular has the server.js to run the server services and server.js is to receive the data from the client and process. The server.js sets up the port to the localhost and then insert the console component. In the socket part to receive the message and name to post to the website page.

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




