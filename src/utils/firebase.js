// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsh9gcq6zFTg6YZBpsvahjUXAXEGCPgHE",
  authDomain: "portfolio-269ba.firebaseapp.com",
  projectId: "portfolio-269ba",
  storageBucket: "portfolio-269ba.appspot.com",
  messagingSenderId: "157469783238",
  appId: "1:157469783238:web:62fdad1b41b3da96d813c7",
  measurementId: "G-2PWK5L0L9S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
