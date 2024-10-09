// Import the functions you need from the SDKs you need
// import { getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA_ua1dViz7yNFrLyGntHCiEGC8qTRvP-8",
//   authDomain: "ecommerce-1b144.firebaseapp.com",
//   projectId: "ecommerce-1b144",
//   storageBucket: "ecommerce-1b144.appspot.com",
//   messagingSenderId: "274415198844",
//   appId: "1:274415198844:web:c322ffd8b66a06588c5ff9"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1rwIzfYZLBn0ZRdkzyspnvqENdJbe4RA",
  authDomain: "e-commerce-a04d7.firebaseapp.com",
  projectId: "e-commerce-a04d7",
  storageBucket: "e-commerce-a04d7.appspot.com",
  messagingSenderId: "708110951409",
  appId: "1:708110951409:web:6b2c2b1d8f0aacd0a3da50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);