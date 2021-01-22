import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDd6ObarLbtdFqzr0qId-5QGtbt6KPyvAs',
  authDomain: 'slack-clone-3398e.firebaseapp.com',
  projectId: 'slack-clone-3398e',
  storageBucket: 'slack-clone-3398e.appspot.com',
  messagingSenderId: '1016109832557',
  appId: '1:1016109832557:web:5309149843cbafbdc4a264',
  measurementId: 'G-VESTYZ67JG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
