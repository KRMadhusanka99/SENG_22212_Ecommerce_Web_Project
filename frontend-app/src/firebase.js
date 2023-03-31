import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCs3MVPuQ3eEuJ9AmF1t2IjhoPGzD70c60",
  authDomain: "first-react-project-a5310.firebaseapp.com",
  projectId: "first-react-project-a5310",
  storageBucket: "first-react-project-a5310.appspot.com",
  messagingSenderId: "908441011173",
  appId: "1:908441011173:web:774dd74c22573ba4ed650c"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};