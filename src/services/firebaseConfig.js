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
  apiKey: "AIzaSyBhTV1QJfJW0GXzeEnPSjm7jQSm5p6FIe0",
  authDomain: "blogreformed.firebaseapp.com",
  projectId: "blogreformed",
  storageBucket: "blogreformed.appspot.com",
  messagingSenderId: "1068566560745",
  appId: "1:1068566560745:web:149d536d030c1daa619578",
  measurementId: "G-6NG2JE14W0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
