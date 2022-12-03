// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHkmcD5udq1874BfjVsYqvg-Ug3z4EfPc",
  authDomain: "blogreformed-12574.firebaseapp.com",
  projectId: "blogreformed-12574",
  storageBucket: "blogreformed-12574.appspot.com",
  messagingSenderId: "673014460299",
  appId: "1:673014460299:web:c3e693376724adf2e0898e",
  measurementId: "G-R356SDMTNV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
