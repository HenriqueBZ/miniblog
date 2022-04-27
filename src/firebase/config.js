import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDtTp3knrWFmUo9RpHLVg04CDdg9GSJZC0",
  authDomain: "mini-blog-7eb40.firebaseapp.com",
  projectId: "mini-blog-7eb40",
  storageBucket: "mini-blog-7eb40.appspot.com",
  messagingSenderId: "774145660292",
  appId: "1:774145660292:web:8c7887bf9872fff0a479d1"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }