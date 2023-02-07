import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5SJ9CPTbFJLNdXvqH263lBvKYzmuRE3E",
  authDomain: "real-time-react-chat.firebaseapp.com",
  projectId: "real-time-react-chat",
  storageBucket: "real-time-react-chat.appspot.com",
  messagingSenderId: "284359256512",
  appId: "1:284359256512:web:a4d9b2d19df0f4b3b34025",
  measurementId: "G-NTR2Z59KX2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
