import app from 'firebase/app';
import 'firebase/auth';
//FIREBASE SHOULD BE A ROOT ON THE SAME LINE AS INDEX.JS

const config = {
    apiKey: "AIzaSyDXrCSXEkrCBQM8Boxyye3ndeDVHcVIgBc",
    authDomain: "jampack-fron-end.firebaseapp.com",
    databaseURL: "https://jampack-fron-end.firebaseio.com",
    projectId: "jampack-fron-end",
    storageBucket: "jampack-fron-end.appspot.com",
    messagingSenderId: "760212620139"
  };

  app.initializeApp(config);

  export default app;