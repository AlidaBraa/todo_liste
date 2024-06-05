import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getFirestore, 
    doc, getDoc
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
const db = getFirestore(app;)
const listeRef = document.getElementById("liste")

// henter ETT dokument
const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}


// henter flere documenter
console.log ("------------ Hent opp flere doc:")

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  const punkt = document.createElement("li")
  punkt.innerHTML = doc.data().tekst
  listeRef.appendChild(punkt)
});
