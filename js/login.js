      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
      import {
        getDatabase,
        set,
        ref,
        update,
      } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
      import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
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

      document.getElementById("login").addEventListener("click", (e) => {
        e.preventDefault();
        let username = document.getElementById("txtUser").value;
        let email = document.getElementById("txtEmail").value;
        let password = document.getElementById("txtPass").value;
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const dt = new Date();
            update(ref(db, "users/" + user.uid), {
              last_login: dt,
            });

            alert("Đăng nhập thành công!");
            setTimeout(function(){
            window.location.href = "./../index.html";
          },1000);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Đăng nhập không thành công");
          });
      });

    //   const user = auth.currentUser;
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/auth.user
    //       const uid = user.uid;
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //     }
    //   });