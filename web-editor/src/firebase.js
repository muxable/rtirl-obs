import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPLQyZHIWvRazDdhm2-ymNf-a_1wqts4c",
  authDomain: "rtirl-a1d7f.firebaseapp.com",
  databaseURL: "https://rtirl-a1d7f-default-rtdb.firebaseio.com",
  projectId: "rtirl-a1d7f",
  storageBucket: "rtirl-a1d7f.appspot.com",
  messagingSenderId: "684852107701",
  appId: "1:684852107701:web:ddcd7410021f2f8a9a61fc",
  measurementId: "G-TQNVW5X4GN",
};

export const firebaseApp = initializeApp(firebaseConfig);
