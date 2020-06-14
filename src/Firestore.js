import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQ8PcPex3e1ypg_9ELxgLBEv2Uk9n8JG0",
    authDomain: "pro-organizer-app-ffebb.firebaseapp.com",
    databaseURL: "https://pro-organizer-app-ffebb.firebaseio.com",
    projectId: "pro-organizer-app-ffebb",
    storageBucket: "pro-organizer-app-ffebb.appspot.com",
    messagingSenderId: "470408867315",
    appId: "1:470408867315:web:29f79372d189c9fae23686"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;