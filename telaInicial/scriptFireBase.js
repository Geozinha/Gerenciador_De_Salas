  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  
  
const firebaseConfig = {
    apiKey: "AIzaSyCtDuPoZJGXltIlzk7M6INd-eNh-sc5tvE",
    authDomain: "trabalho-poo-bb75e.firebaseapp.com",
    projectId: "trabalho-poo-bb75e",
    storageBucket: "trabalho-poo-bb75e.appspot.com",
    messagingSenderId: "27613958125",
    appId: "1:27613958125:web:8bef2e2600a02b5d0b21e4",
    measurementId: "G-6FEDCC7VHW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
