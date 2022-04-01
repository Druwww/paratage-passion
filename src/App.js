import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionDate } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  //config
  apiKey: "AIzaSyCLbQ7M6BczUd0Uv8gaFkHfvzYO1X7rnvo",
  authDomain: "partage-passions.firebaseapp.com",
  projectId: "partage-passions",
  storageBucket: "partage-passions.appspot.com",
  messagingSenderId: "821577078663",
  appId: "1:821577078663:web:be53e23df38b6cc39ea522",
  measurementId: "G-23YBPSR142"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {console.log(firebase)}
        hi
      </header>
    </div>
  );
}

export default App;
