import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-H-k_q9CS_nHBq9NmCsnVPFwO-bEXVp8",
  authDomain: "amercearia-76bd2.firebaseapp.com",
  databaseURL: "https://amercearia-76bd2-default-rtdb.firebaseio.com",
  projectId: "amercearia-76bd2",
  storageBucket: "amercearia-76bd2.appspot.com",
  messagingSenderId: "676357313122",
  appId: "1:676357313122:web:c49f95c094c52d585bb73b",
  measurementId: "G-M21ZEZRG0G"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
