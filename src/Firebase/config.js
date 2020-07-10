import firebase from 'firebase';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDVuTLQET_rJFMdeJAQaYkA1hXZrUkYkNw",
  authDomain: "pro-organizer-app-430d4.firebaseapp.com",
  databaseURL: "https://pro-organizer-app-430d4.firebaseio.com",
  projectId: "pro-organizer-app-430d4",
  storageBucket: "pro-organizer-app-430d4.appspot.com",
  messagingSenderId: "171390799095",
  appId: "1:171390799095:web:8c9e5833b1b2bffcedd7f2"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();