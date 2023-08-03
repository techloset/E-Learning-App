// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXx_T-8SPiLCqKiLo1ucgq7ZQ6J5VVfus",
  authDomain: "e-learn-login.firebaseapp.com",
  projectId: "e-learn-login",
  storageBucket: "e-learn-login.appspot.com",
  messagingSenderId: "594776218806",
  appId: "1:594776218806:web:0dd1c736d469acda815a17",
  databaseURL:"https://e-learn-login-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}