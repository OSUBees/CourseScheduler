import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwoLvEAsFtt-hdap8rPoaVrboRFk0lLjM",
  authDomain: "osubees.firebaseapp.com",
  databaseURL: "https://osubees-default-rtdb.firebaseio.com",
  projectId: "osubees",
  storageBucket: "osubees.appspot.com",
  messagingSenderId: "720767473840",
  appId: "1:720767473840:web:cc8bc2823fb53ce3a70375",
  measurementId: "G-NB2SE00NMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
