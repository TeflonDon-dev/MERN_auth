// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-1ec4e.firebaseapp.com",
  projectId: "mern-auth-1ec4e",
  storageBucket: "mern-auth-1ec4e.appspot.com",
  messagingSenderId: "313293647856",
  appId: "1:313293647856:web:328883af491c329f967735"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);