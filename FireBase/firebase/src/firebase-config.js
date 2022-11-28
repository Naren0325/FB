import { initializeApp } from "firebase/app";
import {getFirestore} from"@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDZvQEMw__c_cahGTw9Ob0HOyK40_OcAgU",
    authDomain: "narenroy-18141.firebaseapp.com",
    projectId: "narenroy-18141",
    storageBucket: "narenroy-18141.appspot.com",
    messagingSenderId: "676326624274",
    appId: "1:676326624274:web:d2fe27706cf99ebd5a1ccb",
    measurementId: "G-LB4W1PK8CT"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);