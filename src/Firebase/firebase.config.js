// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNPG0raGF51HeESApLwLZsBMd5zRwAkNg",
  authDomain: "dragonnews-c4c2d.firebaseapp.com",
  projectId: "dragonnews-c4c2d",
  storageBucket: "dragonnews-c4c2d.firebasestorage.app",
  messagingSenderId: "310501922639",
  appId: "1:310501922639:web:f7751dbfbcb56ef19e173a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;