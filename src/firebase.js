import app from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDXrCSXEkrCBQM8Boxyye3ndeDVHcVIgBc",
    authDomain: "jampack-fron-end.firebaseapp.com",
    databaseURL: "https://jampack-fron-end.firebaseio.com",
    projectId: "jampack-fron-end",
    storageBucket: "",
    messagingSenderId: "760212620139"
  };

  app.initializeApp(config);

  export default app;