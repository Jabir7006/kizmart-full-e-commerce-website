
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDG65GiQhnVYPGzXL81mvlF5eyjIwKPNeU",
  authDomain: "test-2-298a3.firebaseapp.com",
  projectId: "test-2-298a3",
  storageBucket: "test-2-298a3.appspot.com",
  messagingSenderId: "400231151464",
  appId: "1:400231151464:web:86c35387c9006bc15188dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;