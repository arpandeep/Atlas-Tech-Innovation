// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA19OlYhq1jatpqxnv6sDBhPdD93x2mgNM",
    authDomain: "atlas-76996.firebaseapp.com",
    projectId: "atlas-76996",
    storageBucket: "atlas-76996.appspot.com",
    messagingSenderId: "516670738246",
    appId: "1:516670738246:web:6c4b1031f7f2450bdadf47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();