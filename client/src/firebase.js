// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6f25f.firebaseapp.com",
  projectId: "mern-blog-6f25f",
  storageBucket: "mern-blog-6f25f.appspot.com",
  messagingSenderId: "25432944661",
  appId: "1:25432944661:web:5474658901ba35862f5e1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);