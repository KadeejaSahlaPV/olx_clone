import firebase from "firebase/compat/app";
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCK-rZaToJSLXRzbGvYTDKeK8EL5jAoSYU",
    authDomain: "demo1-32b36.firebaseapp.com",
    projectId: "demo1-32b36",
    storageBucket: "demo1-32b36.appspot.com",
    messagingSenderId: "190871188353",
    appId: "1:190871188353:web:6c55118d5842ddb8f2ee80",
    measurementId: "G-5XVMQ3Q5RC"
  };

  export default firebase.initializeApp(firebaseConfig);