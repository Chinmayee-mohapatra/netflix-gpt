// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOeQE46mv3v76LINKLMGGT3FXT5V6N_jg",
  authDomain: "netflixgpt-fcc01.firebaseapp.com",
  projectId: "netflixgpt-fcc01",
  storageBucket: "netflixgpt-fcc01.appspot.com",
  messagingSenderId: "972651737356",
  appId: "1:972651737356:web:1deacb3c5270eaae19d929",
  measurementId: "G-B4GY7306XJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
