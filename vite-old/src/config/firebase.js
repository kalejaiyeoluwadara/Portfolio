// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnoZWJWVCpKgyfKiRGeFymCoy4Ekpjapc",
  authDomain: "portfolio-f9bc1.firebaseapp.com",
  projectId: "portfolio-f9bc1",
  storageBucket: "portfolio-f9bc1.appspot.com",
  messagingSenderId: "831657814169",
  appId: "1:831657814169:web:7076ba2ff6136bdea87008",
  measurementId: "G-NWZX805GKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)