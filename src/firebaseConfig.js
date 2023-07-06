
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9KopFwVpcdkZ9tp_TnmFQQsGQwSbtoqo",
  authDomain: "password-manager-msk.firebaseapp.com",
  projectId: "password-manager-msk",
  storageBucket: "password-manager-msk.appspot.com",
  messagingSenderId: "28201767983",
  appId: "1:28201767983:web:cd1dfc6791f944724462da",
  measurementId: "G-Y6ZV47SJGC",
};

 
export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app);
