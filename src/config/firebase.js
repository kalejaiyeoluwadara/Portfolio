import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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

// Initialize analytics conditionally (only in client-side runtime environment)
let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const db = getFirestore(app);
export { app, analytics };
