// Import necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4UeDXCa0GkLilCqbLG0N-y5iTCNqKODM",
  authDomain: "primehub-6d7be.firebaseapp.com",
  projectId: "primehub-6d7be",
  storageBucket: "primehub-6d7be.appspot.com", // Corrected storageBucket
  messagingSenderId: "66164744774",
  appId: "1:66164744774:web:949f546578ae3a4481e047",
  measurementId: "G-FKPQ7JKGND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);