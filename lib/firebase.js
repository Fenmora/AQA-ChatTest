// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM3d8LINGC7nbT6QgFC_hKeauViJ2oI2g",
  authDomain: "aqa-chattest.firebaseapp.com",
  projectId: "aqa-chattest",
  storageBucket: "aqa-chattest.appspot.com",
  messagingSenderId: "490872566552",
  appId: "1:490872566552:web:8334b3052a83a7e589a46d",
  measurementId: "G-Q3NKCYXKTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
