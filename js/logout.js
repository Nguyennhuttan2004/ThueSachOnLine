import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();