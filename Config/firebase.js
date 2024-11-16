import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCy8UFSrMgpzI_NAjAfMOKKWjRf11v3auE",
    authDomain: "restaurantapp-d5732.firebaseapp.com",
    databaseURL: "https://restaurantapp-d5732-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-d5732",
    storageBucket: "restaurantapp-d5732.appspot.com",
    messagingSenderId: "426929816114",
    appId: "1:426929816114:web:a0ef5d3ff981f1d60a322b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
export const FirebaseAuth = getAuth(app);
// Initialize Database
export const database =  getDatabase(app);


