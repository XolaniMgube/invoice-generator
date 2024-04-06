import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbbEJ_zrGM1oHUDuhN_5j74NUxVZdbprk",
  authDomain: "invoice-generator-6d7f2.firebaseapp.com",
  projectId: "invoice-generator-6d7f2",
  storageBucket: "invoice-generator-6d7f2.appspot.com",
  messagingSenderId: "867894449892",
  appId: "1:867894449892:web:3485edbac57c76b1593ef1",
  measurementId: "G-X0Q1B4E5Y3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)