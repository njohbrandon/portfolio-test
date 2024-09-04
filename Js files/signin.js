// Import the functions you need from the SDKs you need
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCDY5EZ4xNy3QXtUMFAoDlX8Ej_gEk9y8",
  authDomain: "first-login-form-9b70a.firebaseapp.com",
  projectId: "first-login-form-9b70a",
  storageBucket: "first-login-form-9b70a.appspot.com",
  messagingSenderId: "632711009167",
  appId: "1:632711009167:web:7ee06957eb6206cd70f1fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
  
  const submit = document.getElementById('submit1');
  
  submit.addEventListener("click", (e) => { 
    event.preventDefault()
    const signinUsername = document.getElementById('signinUsername').value;
    const signupEmail = document.getElementById('signupEmail').value;
    const signinPassword = document.getElementById('signinPassword').value;

    signInWithEmailAndPassword(auth, signupEmail, signinPassword)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    alert("successfully registered user:")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("login successful")
    window.location.href = 'home.html';

    // ..
  });
  window.location.href("index.html")
    
    console.log(signupEmail, signupPassword, signinPassword)
    
   })

  
