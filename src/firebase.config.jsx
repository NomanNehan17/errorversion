// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDprxMgrRZwczNISMr9RBnQtv4GjO0EU70",
  authDomain: "e-commerece-website-728e9.firebaseapp.com",
  projectId: "e-commerece-website-728e9",
  storageBucket: "e-commerece-website-728e9.appspot.com",
  messagingSenderId: "898365586885",
  appId: "1:898365586885:web:7c2b75b7cdfc63e40b9fac",
  measurementId: "G-G4S3WT12YW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);