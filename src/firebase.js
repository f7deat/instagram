import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_A6-PJMxkdZPP6nZD5pWwmMNBr0upE_w",
  authDomain: "instagram-48891.firebaseapp.com",
  databaseURL: "https://instagram-48891.firebaseio.com",
  projectId: "instagram-48891",
  storageBucket: "instagram-48891.appspot.com",
  messagingSenderId: "294065804481",
  appId: "1:294065804481:web:05905c0796ca48e49b7040",
  measurementId: "G-BDV0J4V1ZJ"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};