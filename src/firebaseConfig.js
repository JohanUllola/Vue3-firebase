
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlSGK7j8md_BP5o1Ckq7fC5Wh7h0-Prx0",
  authDomain: "vue-3-prueba-e25a5.firebaseapp.com",
  projectId: "vue-3-prueba-e25a5",
  storageBucket: "vue-3-prueba-e25a5.appspot.com",
  messagingSenderId: "652135509980",
  appId: "1:652135509980:web:a17561ce777bd68b2ae919"
};


initializeApp(firebaseConfig);
const auth= getAuth();

export  {auth};