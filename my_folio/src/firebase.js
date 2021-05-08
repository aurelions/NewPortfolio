import firebase from "firebase/app"
import "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBcqAVOvDAOpmEmvLj5PF0Ueai9vPfRADI",
  authDomain: "myprojects-64d83.firebaseapp.com",
  projectId: "myprojects-64d83",
  storageBucket: "myprojects-64d83.appspot.com",
  messagingSenderId: "235265153548",
  appId: "1:235265153548:web:ea5edb1912add3f861ac29"
};

firebase.initializeApp(firebaseConfig)

export default firebase