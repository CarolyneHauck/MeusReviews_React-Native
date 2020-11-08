import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCGRuQXdO9NsZDKeCasmMnJ1XGcdilQmqY",
    authDomain: "meusreviews-7a744.firebaseapp.com",
    databaseURL: "https://meusreviews-7a744.firebaseio.com",
    projectId: "meusreviews-7a744",
    storageBucket: "meusreviews-7a744.appspot.com",
    messagingSenderId: "348768830532",
    appId: "1:348768830532:web:bd1999611ede3a1c662811",
    measurementId: "G-P4D5WY4D55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase