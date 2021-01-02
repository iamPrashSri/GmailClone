import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVSfTDUY4UvhyqCfAOEHHf2h9UCjJ6kMU",
    authDomain: "clone-88bd1.firebaseapp.com",
    projectId: "clone-88bd1",
    storageBucket: "clone-88bd1.appspot.com",
    messagingSenderId: "264354888391",
    appId: "1:264354888391:web:d6c9abde2fb2893cc91ce2",
    measurementId: "G-4E6VEXQR68"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };