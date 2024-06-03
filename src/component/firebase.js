// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz9zNtZuOXCqdXaQ2GORrx1mFGI6uSer4",
  authDomain: "dashboard-ae6b7.firebaseapp.com",
  projectId: "dashboard-ae6b7",
  storageBucket: "dashboard-ae6b7.appspot.com",
  messagingSenderId: "554521199655",
  appId: "1:554521199655:web:3e84c36b729416326b3a02",
  measurementId: "G-7FQRHML6CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth,app}