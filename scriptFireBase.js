// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRMhef2tOFf0FtwsZUxEq3XXEy-XZteDM",
  authDomain: "gerenciador-de-sala.firebaseapp.com",
  projectId: "gerenciador-de-sala",
  storageBucket: "gerenciador-de-sala.appspot.com",
  messagingSenderId: "441158907963",
  appId: "1:441158907963:web:188172f39ac3ef2043441e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export { db };
