// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABGxP-TK9bM6RM4pyuzVAe2vs9OfQ8Go8",
  authDomain: "lmsmycourse.firebaseapp.com",
  databaseURL: "https://lmsmycourse-default-rtdb.firebaseio.com",
  projectId: "lmsmycourse",
  storageBucket: "lmsmycourse.appspot.com",
  messagingSenderId: "310878972925",
  appId: "1:310878972925:web:b1e6b441fda8f8b8af8794",
  measurementId: "G-F702BG0E2V"
};

const db = firebase.firestore();

db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});