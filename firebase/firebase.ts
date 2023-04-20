// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6nD-dm4EMk6Cp66k-jc9kL4T4IpPzGpY",
    authDomain: "codelingo-6fd2a.firebaseapp.com",
    projectId: "codelingo-6fd2a",
    storageBucket: "codelingo-6fd2a.appspot.com",
    messagingSenderId: "254055727132",
    appId: "1:254055727132:web:a436d89c5920a7dddbdfd9",
    measurementId: "G-KGS18XXNRM"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);




 export const initFirebase = () => {
     return app;
 }

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default {firebase,firebaseConfig};
