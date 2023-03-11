// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0UXV0RkJUiA1jHWZao_Saaqb0nap8_JY",
  authDomain: "twitter-yt-644e3.firebaseapp.com",
  projectId: "twitter-yt-644e3",
  storageBucket: "twitter-yt-644e3.appspot.com",
  messagingSenderId: "550179076672",
  appId: "1:550179076672:web:38f46e69d2c7ce758dfda5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db,storage};