
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAIOAVQ4lE8ZxyG_UWCIzo4EVQFL52MzxQ",
      authDomain: "kwitter-99fe9.firebaseapp.com",
      databaseURL: "https://kwitter-99fe9-default-rtdb.firebaseio.com",
      projectId: "kwitter-99fe9",
      storageBucket: "kwitter-99fe9.appspot.com",
      messagingSenderId: "1001309955408",
      appId: "1:1001309955408:web:fa485662e86ff90d883855"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
      

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}