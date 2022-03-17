import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsx2T0r66OME6R4V5V3iKOkzYcJqmq-Nc",
  authDomain: "taugorapp-db.firebaseapp.com",
  projectId: "taugorapp-db",
  storageBucket: "taugorapp-db.appspot.com",
  messagingSenderId: "467380194160",
  appId: "1:467380194160:web:5fd27581b0f70e3f6bddb5"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const GetRequestsList = async () => {
  const requestsRef = collection(db, 'requests');
  const crequestsSnapshot = await getDocs(requestsRef);
  const requestsList = crequestsSnapshot.docs.map(doc => doc.data());

  return requestsList;
}

export const GetUser = () => {
  return auth.currentUser
}