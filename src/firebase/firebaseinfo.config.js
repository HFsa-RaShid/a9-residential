import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiBO5fYnthKxhkN9iwlH_Y-hCMxiDi9ig",
  authDomain: "a9-residential.firebaseapp.com",
  projectId: "a9-residential",
  storageBucket: "a9-residential.appspot.com",
  messagingSenderId: "299561654005",
  appId: "1:299561654005:web:94dceeb6d21998f5d797bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
