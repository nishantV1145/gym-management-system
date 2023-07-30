



const firebaseConfig = {
  apiKey: "AIzaSyDq2YrUprZ9z4FyiF_woe2nqtgO9pHUOqc",
  authDomain: "gym-management-system-7fad3.firebaseapp.com",
  databaseURL: "https://gym-management-system-7fad3-default-rtdb.firebaseio.com",
  projectId: "gym-management-system-7fad3",
  storageBucket: "gym-management-system-7fad3.appspot.com",
  messagingSenderId: "324307709538",
  appId: "1:324307709538:web:b2ed4ef5cfe43e5a006b3b"
};

// https://gym-management-system-7fad3-default-rtdb.firebaseio.com/



firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('messages');

      document.getElementById('contactFrom').addEventListener('sumbit',submitFrom);


     function submitForm(e){
      e.preventDefault();
           var first_name = getInputVal('first-name');
           var last_name = getInputVal('last-name');
           var email = getInputVal('email');
           var username = getInputVal('username');
           var password = getInputVal('password');
           var confirm_password = getInputVal('confirm-password');

           saveMessage(first_name,last_name,email,username,password,confirm_password);

           

         
          document.getElementById('contactForm').reset();
          }

          function getInputVal(id){
            return document.getElementById(id).value;
          }
    
         function saveMessage(first_name,last_name,email,username,password,confirm_password){
            var newMessageRef = messagesRef.push();
            newMessageRef .set({
                first_name:first_name,
                last_name : last_name,
                email : email,
                username : username,
                password : password,
                confirm_password : confirm_password
            });
          }





document.getElementById("join_yet").onclick = function () {
  location.href = "profile.html";
};

document.getElementById("member").onclick = function () {
  location.href = "profile.html";
};
document.getElementById("join").onclick = function () {
    location.href = "profile.html";
  };
  
  function clickinner(target) { 
    location.href='profile.html';
  };
  document.getElementById("daily_pass").onclick = function () {
    location.href = "profile.html";
  };
  
 

  