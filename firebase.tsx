import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDeCACidGs6Sn9VqX5Wl_Hlt-p5NHuHwzk",
    authDomain: "fandom-24a23.firebaseapp.com",
    databaseURL: "https://fandom-24a23.firebaseio.com",
    projectId: "fandom-24a23",
    storageBucket: "fandom-24a23.appspot.com",
    messagingSenderId: "954740757763",
    appId: "1:954740757763:web:073a6a6142524d4ebbc536",
    measurementId: "G-Q7CGS7GVF5"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

  export default firebase;
