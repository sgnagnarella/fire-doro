import {getApps, initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import {getAnalytics} from "firebase/analytics";
import {getPerformance} from "firebase/performance";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/*
const firebaseConfig = {
  apiKey: "AIzaSyAPSjWOjGu6D2Yo8fWxlXCPS2MefFWPF20",
  authDomain: "fire-doro-614fd.firebaseapp.com",
  projectId: "fire-doro-614fd",
  storageBucket: "fire-doro-614fd.appspot.com",
  messagingSenderId: "61296004249",
  appId: "1:61296004249:web:ba7c050554754ac4cebc08",
  measurementId: "G-0NBNW793LV"
};
*/
const intializeFirebase = () => {
  if(!getApps().length) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  if ( typeof window !== 'undefined'){
    if("measurementId" in firebaseConfig) {
      const analytics = getAnalytics(app);
      const performance = getPerformance(app);
    }
  }
  console.log("Firebase initialized successfully ");
  } else {
    console.log("Firebase already initialized");
  }
}

export default intializeFirebase;




