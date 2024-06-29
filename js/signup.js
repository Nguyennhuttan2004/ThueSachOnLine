// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyNS8h2Q-I0jOrgcxAoFohootXRFThZs0",
  authDomain: "userdatabase-4a8ad.firebaseapp.com",
  databaseURL: "https://userdatabase-4a8ad-default-rtdb.firebaseio.com/",
  projectId: "userdatabase-4a8ad",
  storageBucket: "userdatabase-4a8ad.appspot.com",
  messagingSenderId: "675019003763",
  appId: "1:675019003763:web:55b76ad80d1d17ddff5706",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

document.getElementById("SignUp").addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.getElementById("txtUser").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      set(ref(db, "users/" + user.uid), {
        username: username,
        email: email,
      });

      alert("Đăng ký thành công!");
      setTimeout(function(){
      window.location.href = "login.html";
    },1000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  
    
});
 