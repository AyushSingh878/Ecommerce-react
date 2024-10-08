// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ua1dViz7yNFrLyGntHCiEGC8qTRvP-8",
  authDomain: "ecommerce-1b144.firebaseapp.com",
  projectId: "ecommerce-1b144",
  storageBucket: "ecommerce-1b144.appspot.com",
  messagingSenderId: "274415198844",
  appId: "1:274415198844:web:c322ffd8b66a06588c5ff9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);