import * as  firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCi1zFIIauL1NPSKQNZ5lrjFqExgYkKFOM",
    authDomain: "willy-9cfbf.firebaseapp.com",
    databaseURL: "https://willy-9cfbf.firebaseio.com",
    projectId: "willy-9cfbf",
    storageBucket: "willy-9cfbf.appspot.com",
    messagingSenderId: "982413733521",
    appId: "1:982413733521:web:52a05b7a78721404c21930"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()