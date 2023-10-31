// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO3AEeSdL-sjNPjtAKTT07gxUmoFztkfg",
  authDomain: "jiwiggy.firebaseapp.com",
  projectId: "jiwiggy",
  storageBucket: "jiwiggy.appspot.com",
  messagingSenderId: "1016174588277",
  appId: "1:1016174588277:web:578ba9b4f21c0fa988633c",
  measurementId: "G-5T48XQLBRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);