import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBsx2T0r66OME6R4V5V3iKOkzYcJqmq-Nc",
  authDomain: "taugorapp-db.firebaseapp.com",
  projectId: "taugorapp-db",
  storageBucket: "taugorapp-db.appspot.com",
  messagingSenderId: "467380194160",
  appId: "1:467380194160:web:5fd27581b0f70e3f6bddb5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);