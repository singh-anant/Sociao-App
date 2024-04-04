// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbewv2YP-gqJ8eTWaYsURpPWCM7gCdyho",
  authDomain: "sociaoapp-ed4ad.firebaseapp.com",
  projectId: "sociaoapp-ed4ad",
  storageBucket: "sociaoapp-ed4ad.appspot.com",
  messagingSenderId: "635413925895",
  appId: "1:635413925895:web:813f8baa9cbb3966e29aa2",
  measurementId: "G-CJGQ40Q4HN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth, analytics };
