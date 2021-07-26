// import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAenhhzotazl1i3nsRJ0fNfv0T-YgVyIBg",
  authDomain: "tinder-clone-df913.firebaseapp.com",
  databaseUrl: "https://tinder-clone-df913.firebaseio.com",
  projectId: "tinder-clone-df913",
  storageBucket: "tinder-clone-df913.appspot.com",
  messagingSenderId: "909986180037",
  appId: "1:909986180037:web:76c241b8f09d99a9de79ac",
  measurementId: "G-98GB3V96D5"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore(); 

export default database ; 