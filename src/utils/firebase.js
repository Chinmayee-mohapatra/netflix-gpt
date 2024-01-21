// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzKcpoZuD18xcvPujEX1fhUuAEu3XOT_E",
  authDomain: "netflix-gpt-4b75c.firebaseapp.com",
  projectId: "netflix-gpt-4b75c",
  storageBucket: "netflix-gpt-4b75c.appspot.com",
  messagingSenderId: "463064192585",
  appId: "1:463064192585:web:e62563c730533f4b219198",
  measurementId: "G-WRPJ3RS6VG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
