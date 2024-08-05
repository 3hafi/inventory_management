// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcw1c99fPaC0JsUMfCbt2_jQ9VrCfGkhc",
  authDomain: "inventory-management-7286a.firebaseapp.com",
  projectId: "inventory-management-7286a",
  storageBucket: "inventory-management-7286a.appspot.com",
  messagingSenderId: "118638644346",
  appId: "1:118638644346:web:a402100c485fa3a7ce3fc3",
  measurementId: "G-GCYGBKT1SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);