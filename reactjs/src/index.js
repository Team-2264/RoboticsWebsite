import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYIDMY8M96gHTueNctyFRUTjNiW92qktQ",
  authDomain: "trojanrobotics-ab4b6.firebaseapp.com",
  projectId: "trojanrobotics-ab4b6",
  storageBucket: "trojanrobotics-ab4b6.appspot.com",
  messagingSenderId: "601267079366",
  appId: "1:601267079366:web:a85e39a04f90c3ed67efc7",
  measurementId: "G-6DK25958YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById('root'));

