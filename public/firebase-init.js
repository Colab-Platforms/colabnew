// firebase-init.js

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmrjFbHD_h93pastwaDwtVvNyX27EiaIU",
  authDomain: "colab-blog.firebaseapp.com",
  projectId: "colab-blog",
  storageBucket: "colab-blog.firebasestorage.app",
  messagingSenderId: "943366440260",
  appId: "1:943366440260:web:6ec4473cf983962897c311",
  measurementId: "G-2PQ00WE24B"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
// const storage = firebase.storage(); // Removed as Firebase Storage is not used
