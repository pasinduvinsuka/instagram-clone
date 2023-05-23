import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyCNNq8u9pSxdmGVUK4s6ticn0M6h2u7oVg",
  authDomain: "instagram-clone-react-d8e18.firebaseapp.com",
  projectId: "instagram-clone-react-d8e18",
  storageBucket: "instagram-clone-react-d8e18.appspot.com",
  messagingSenderId: "670347313301",
  appId: "1:670347313301:web:2fcf48520dfdc38ac75b9c",
  measurementId: "G-3L8WTQ2EYD"
});

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{db, auth, storage};