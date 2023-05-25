import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA_x0nw4gxraCtkYlgFYG_d8EYEjLQlnY",
  authDomain: "my-project-native-387610.firebaseapp.com",
  projectId: "my-project-native-387610",
  storageBucket: "my-project-native-387610.appspot.com",
  messagingSenderId: "588398316589",
  appId: "1:588398316589:web:c0e8ca73b4f6af3e5d3ca4",
  measurementId: "G-DBTCCQHLX8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;