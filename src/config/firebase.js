
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBO4Kbprc4cTDAy_Z6ZOC5KMNIhMAzHlTU",
  authDomain: "lynchburg-peacemakers.firebaseapp.com",
  databaseURL: "https://lynchburg-peacemakers-default-rtdb.firebaseio.com",
  projectId: "lynchburg-peacemakers",
  storageBucket: "lynchburg-peacemakers.appspot.com",
  messagingSenderId: "465119479543",
  appId: "1:465119479543:web:e87acb71673257c68b35f2",
  measurementId: "G-XN49YZ0ZPQ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);