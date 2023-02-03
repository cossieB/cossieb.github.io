// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, signInAnonymously } from "firebase/auth";
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyDu_GSKWh-KdkBN0CF4CGUCisRuQmlj1T0",
    authDomain: "cossie-91.firebaseapp.com",
    projectId: "cossie-91",
    storageBucket: "cossie-91.appspot.com",
    messagingSenderId: "650544894410",
    appId: "1:650544894410:web:34e96bafbbc5f62f03bf33",
    measurementId: "G-GY12Y3D6CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);


const auth = getAuth();
signInAnonymously(auth)
    .then(() => {
        // Signed in..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ...
    });

export const db = getFirestore();

