// import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_CONFIG as string
);

// Optionally log the config to verify it's parsed correctly
// console.log("Parsed Firebase Config:", firebaseConfig);

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export {
  // analytics,
  db,
  storage,
};
