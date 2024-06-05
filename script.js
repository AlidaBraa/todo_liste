import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import {
  getFirestore,
  collection,
  doc,
  query,
  where,
  getDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUPXpZgq1oF5Wq1-N9TjlR60lh4sEC6H0",
  authDomain: "todo-list-a74aa.firebaseapp.com",
  projectId: "todo-list-a74aa",
  storageBucket: "todo-list-a74aa.appspot.com",
  messagingSenderId: "987275776592",
  appId: "1:987275776592:web:ba5bac442c93661a93b755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const docRef = doc(db, "TodoItems", "1");
const docSnap = await getDoc(docRef);


// Henter opp ETT doc med ID: 
console.log("--------- Henter ETT doc:")
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

// Henter opp FLERE docs:
console.log("--------- Henter FLERE docs:")
const q = query(collection(db, "TodoItems"), where("erFerdig", "==", true));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
