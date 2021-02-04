import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAO1AeUn89ooT1GQppDtCvJnoW_mCjTAdg",
  authDomain: "netflix-challenge-9b611.firebaseapp.com",
  projectId: "netflix-challenge-9b611",
  storageBucket: "netflix-challenge-9b611.appspot.com",
  messagingSenderId: "679727522705",
  appId: "1:679727522705:web:338b716fce06fe9a78f030",
  measurementId: "G-GW4R2BT5H7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
