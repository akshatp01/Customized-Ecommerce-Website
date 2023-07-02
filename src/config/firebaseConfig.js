import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore, updateDoc, doc, arrayUnion } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC5OoA6fCo-TaennLV2O2Ne3uuUHn-5NDM",
  authDomain: "custom-miniax.firebaseapp.com",
  projectId: "custom-miniax",
  storageBucket: "custom-miniax.appspot.com",
  messagingSenderId: "361073753641",
  appId: "1:361073753641:web:b6fcfaacc96f3d5e96a638",
  measurementId: "G-72NL2S9TK4"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);



export {
  db, storage, ref, auth, app as default

}