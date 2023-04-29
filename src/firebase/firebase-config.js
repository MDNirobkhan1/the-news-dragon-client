// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDasqtTHAE6NEQ5fkKZvMioS6DfPOCEqzg",
  authDomain: "the-news-dragon-client-22147.firebaseapp.com",
  projectId: "the-news-dragon-client-22147",
  storageBucket: "the-news-dragon-client-22147.appspot.com",
  messagingSenderId: "160121924575",
  appId: "1:160121924575:web:3e82e9ad658864632df26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;