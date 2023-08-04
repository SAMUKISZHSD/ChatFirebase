import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2ZHC97SrfzsDE7r3JlFeraG9vBkN1f3c",
  authDomain: "firechat-9827c.firebaseapp.com",
  projectId: "firechat-9827c",
  storageBucket: "firechat-9827c.appspot.com",
  messagingSenderId: "370916885117",
  appId: "1:370916885117:web:dc260c3c756d5b51a6a714",
  measurementId: "G-FJX03LYCND"
};

export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);
