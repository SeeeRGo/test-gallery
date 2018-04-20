import * as firebase from 'firebase'
import 'firebase/firestore';
import { setTimeout } from 'timers';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID
};
firebase.initializeApp(config);

firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      const db = firebase.firestore();
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const database = firebase.firestore();
console.log(database)
database.collection('gallery').doc('testdoc').set({ url: 'asdasd', comment: 'sdfsxx'})

export { firebase, googleAuthProvider, database as default }