import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_ftsZ3rZkXm4bC0GcLS7zdGVv8-twrXc",
  authDomain: "note-app-47e00.firebaseapp.com",
  projectId: "note-app-47e00",
  storageBucket: "note-app-47e00.appspot.com",
  messagingSenderId: "18540182122",
  appId: "1:18540182122:web:77a7e8a8c156a740862813",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
