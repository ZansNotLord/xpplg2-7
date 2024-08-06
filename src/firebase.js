// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDSY5esCgS9RUqbaBgN0StuICjUcm7tSr4",
    authDomain: "web-kelas-eab96.firebaseapp.com",
    projectId: "web-kelas-eab96",
    storageBucket: "web-kelas-eab96.appspot.com",
    messagingSenderId: "159379905739",
    appId: "1:159379905739:web:ad22ced7712b7f72c18f4e",
    measurementId: "G-QXJP0JEE4R"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
