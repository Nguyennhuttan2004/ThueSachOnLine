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
  apiKey: "AIzaSyCS7Td5JGz4eNmpRUblaq87ZGJo0j6JDnk",
  authDomain: "erudite-realm-330607.firebaseapp.com",
  databaseURL: "https://erudite-realm-330607-default-rtdb.firebaseio.com",
  projectId: "erudite-realm-330607",
  storageBucket: "erudite-realm-330607.appspot.com",
  messagingSenderId: "263875298921",
  appId: "1:263875298921:web:b36cdc114fee96cf4704f8",
  measurementId: "G-N6ZMKN5974"
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
      window.location.href = "./../html/login.html";
    },1000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  
    
});
 