// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import{getFirestore} from 'firebase/firestore' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI7JuttA_u_WItVr33By4dSD_hj1cyvVk",
  authDomain: "fireflix-232eb.firebaseapp.com",
  projectId: "fireflix-232eb",
  storageBucket: "fireflix-232eb.appspot.com",
  messagingSenderId: "270222192585",
  appId: "1:270222192585:web:453bddf96c36544e3c4218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}