import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBehuAFXU5mnn-pftrJNCXr5SDIjmxbiSQ",
  authDomain: "chat-with-pdf-challenge-1cb46.firebaseapp.com",
  projectId: "chat-with-pdf-challenge-1cb46",
  storageBucket: "chat-with-pdf-challenge-1cb46.appspot.com",
  messagingSenderId: "491951572918",
  appId: "1:491951572918:web:c185f30147f7de647da317",
  measurementId: "G-5L1FZ2JDD4",
  cors: [
    {
      origin: ["*"],
      method: ["GET"],
      maxAgeSeconds: 3600,
    },
  ],
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { analytics, db, storage };
