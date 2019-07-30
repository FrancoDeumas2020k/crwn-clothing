import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyArBNkOl8KFIlM8EfofxW6LwdjHPhaAQMs",
    authDomain: "crwn-app-2d7f5.firebaseapp.com",
    databaseURL: "https://crwn-app-2d7f5.firebaseio.com",
    projectId: "crwn-app-2d7f5",
    storageBucket: "",
    messagingSenderId: "61996560661",
    appId: "1:61996560661:web:a3a3cd92b915255f"
  };


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();



  // google authentication.

  let provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt : 'select_account'});
     export const signInWithGoogle = () => auth.signInWithPopup(provider);


     export default firebase;

      
