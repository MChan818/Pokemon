import firebase from "firebase/app";
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDUCJw57D7I3w2A_7r1f2k5mrMgOrgTy3Q",
  authDomain: "react-prueba-96435.firebaseapp.com",
  projectId: "react-prueba-96435",
  storageBucket: "react-prueba-96435.appspot.com",
  messagingSenderId: "368172911107",
  appId: "1:368172911107:web:1dbf88e8facd7931049c36",
  measurementId: "G-2YDXYH9YM7"
});

export const getFirebase = () =>{ return app;}
export const getFirestore = () =>{ return firebase.firestore(app);}
