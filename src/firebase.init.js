// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN_noe5rJu4NnOJ6UoCQjtAZHUWi4Mdk4",
  authDomain: "ira-s-kitchen.firebaseapp.com",
  projectId: "ira-s-kitchen",
  storageBucket: "ira-s-kitchen.appspot.com",
  messagingSenderId: "141427083945",
  appId: "1:141427083945:web:e24a487d195b255506b7b8"
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
