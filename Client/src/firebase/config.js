import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";




const firebaseConfig ={
    apiKey: "AIzaSyDAHNQcA4VLZ_2RNWyPf7wmeOijqAlX9Ak",
    authDomain: "atlas-240bd.firebaseapp.com",
    projectId: "atlas-240bd",
    storageBucket: "atlas-240bd.appspot.com",
    messagingSenderId: "415045389084",
    appId: "1:415045389084:web:b640155efd2a2adb89c8d9"

}

export const app= initializeApp(firebaseConfig);
export const storage= getStorage()

