// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzPQ6qOIO7NkIweMp92eEf6GU8OCglstA",
  authDomain: "paw-mart-shop.firebaseapp.com",
  projectId: "paw-mart-shop",
  storageBucket: "paw-mart-shop.firebasestorage.app",
  messagingSenderId: "1096987153884",
  appId: "1:1096987153884:web:e53feb223086186c42ab19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
