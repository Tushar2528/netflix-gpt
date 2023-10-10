// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjWTFdTi2ozxQ69Xif45JFvEnWIsktTPk",
  authDomain: "netflix-gpt-8d4f0.firebaseapp.com",
  projectId: "netflix-gpt-8d4f0",
  storageBucket: "netflix-gpt-8d4f0.appspot.com",
  messagingSenderId: "405909916012",
  appId: "1:405909916012:web:a536452bd4cf0962fd0b49",
  measurementId: "G-VMWQ5S4YGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();