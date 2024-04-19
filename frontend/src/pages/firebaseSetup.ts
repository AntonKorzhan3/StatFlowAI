import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBCcfnCwwH-mrn-e_s2V_R1lQgSQRLcdIU",
    authDomain: "statflowai.firebaseapp.com",
    projectId: "statflowai",
    storageBucket: "statflowai.appspot.com",
    messagingSenderId: "1076790030424",
    appId: "1:1076790030424:web:cba512e8727a07c41b1a2d"
  };

const firebase = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, firebase };