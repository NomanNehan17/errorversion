// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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