import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdoV1darIAVDscZACnx_pt8ov3VSLfO5g",
  authDomain: "taskmaster-b0f18.firebaseapp.com",
  projectId: "taskmaster-b0f18",
  storageBucket: "taskmaster-b0f18.appspot.com",
  messagingSenderId: "776340388757",
  appId: "1:776340388757:web:24d01e088a3def865dd49c",
  measurementId: "G-TZ91JXG5B1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();