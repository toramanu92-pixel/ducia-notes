import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoXLwMAxFADvsxvBRsYKuQM5N8N_o-qfU",
  authDomain: "ducia-notes.firebaseapp.com",
  projectId: "ducia-notes",
  storageBucket: "ducia-notes.firebasestorage.app",
  messagingSenderId: "671245032602",
  appId: "1:671245032602:web:8fe54517f83b577c139323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  authDomain: "TON_PROJET.firebaseapp.com",
  projectId: "TON_PROJET",
  storageBucket: "TON_PROJET.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Rendre accessible globalement pour script.js
window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
