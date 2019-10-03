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




##  A list of routes, parameters, return values, and purpose




## Angular architecture: components, services, models, routes




## Describe the details of the interaction between client and server by indicating how the files and global vars in server side will be changed and how the display of each angular component page will be updated. 
