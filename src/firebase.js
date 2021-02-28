import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2_es_N-hWCRb4AIoIxDkiJvhNYom3Zns",
  authDomain: "facebook-clone-c274a.firebaseapp.com",
  projectId: "facebook-clone-c274a",
  storageBucket: "facebook-clone-c274a.appspot.com",
  messagingSenderId: "390217388786",
  appId: "1:390217388786:web:acb7bdf90f52f63179766b",
  measurementId: "G-9P2FXZXSFZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
