// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArRI-CwsK16KBlfatgTScKiVXEwJE9vFk",
  authDomain: "digital-loan-24cec.firebaseapp.com",
  projectId: "digital-loan-24cec",
  storageBucket: "digital-loan-24cec.appspot.com", // Fixed typo: was firebasestorage.app
  messagingSenderId: "584034948291",
  appId: "1:584034948291:web:003cdccc5f2c3e4e8abe76",
  measurementId: "G-V4J955Z95G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (conditionally since it only works in the browser)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics };
