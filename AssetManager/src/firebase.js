// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz2tUErxZz7_oJQwpvvqaUObEr5rNm86U",
  authDomain: "msditiventorymanager.firebaseapp.com",
  projectId: "msditiventorymanager",
  storageBucket: "msditiventorymanager.appspot.com",
  messagingSenderId: "701542076865",
  appId: "1:701542076865:web:e1dda9a08362ca7d919f40",
  measurementId: "G-P2PM7F6T72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
