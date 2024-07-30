// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuALf_Y7EhfmETv_2NP3_Xpjx9mJEHbNA",
  authDomain: "netflixgpt-a982d.firebaseapp.com",
  projectId: "netflixgpt-a982d",
  storageBucket: "netflixgpt-a982d.appspot.com",
  messagingSenderId: "1080902359372",
  appId: "1:1080902359372:web:fc2bfdea590bceac9597e9",
  measurementId: "G-R03P92V1KJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
