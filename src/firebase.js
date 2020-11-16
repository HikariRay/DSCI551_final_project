
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCl1rRs_NixF2xXJjTdNIkGJn-GM1db8AU",
    authDomain: "testpreject-1d4ae.firebaseapp.com",
    databaseURL: "https://testpreject-1d4ae.firebaseio.com",
    projectId: "testpreject-1d4ae",
    storageBucket: "testpreject-1d4ae.appspot.com",
    messagingSenderId: "777634051145",
    appId: "1:777634051145:web:9b8b443a5a879e66f7bb98"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase;