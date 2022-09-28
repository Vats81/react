// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjAl1r1oTARxwS7C4wU6-E0tXOUx2UFoo",
  authDomain: "registration-form-57649.firebaseapp.com",
  databaseURL: "https://registration-form-57649-default-rtdb.firebaseio.com",
  projectId: "registration-form-57649",
  storageBucket: "registration-form-57649.appspot.com",
  messagingSenderId: "81294680015",
  appId: "1:81294680015:web:dae87000c87c33bb9f7cba",
  measurementId: "G-PZ9YKC74SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);