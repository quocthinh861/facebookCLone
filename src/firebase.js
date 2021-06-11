import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDV4LQl3aNMBMtuCFu9K9OEr7yw5HrERVc",
    authDomain: "facebook-ae64d.firebaseapp.com",
    projectId: "facebook-ae64d",
    storageBucket: "facebook-ae64d.appspot.com",
    messagingSenderId: "772817800344",
    appId: "1:772817800344:web:48c1c83ea2219e208d14ed"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
