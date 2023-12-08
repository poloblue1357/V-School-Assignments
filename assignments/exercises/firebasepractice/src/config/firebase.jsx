// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDieRv1LrW58GPbHEenHRuKfl4g4kIyaxw",
  authDomain: "practice-f3dba.firebaseapp.com",
  projectId: "practice-f3dba",
  storageBucket: "practice-f3dba.appspot.com",
  messagingSenderId: "1068464616099",
  appId: "1:1068464616099:web:f6eb6461e61d03e2810516",
  measurementId: "G-1SQYNRWMQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()