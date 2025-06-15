// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArRI-CwsK16KBlfatgTScKiVXEwJE9vFk",
  authDomain: "digital-loan-24cec.firebaseapp.com",
  projectId: "digital-loan-24cec",
  storageBucket: "digital-loan-24cec.appspot.com",
  messagingSenderId: "584034948291",
  appId: "1:584034948291:web:003cdccc5f2c3e4e8abe76",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
