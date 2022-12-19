// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDex3Fp32Fh55UYW_Dn8iqVhbMhoB4QIkQ",
  authDomain: "auth-82b29.firebaseapp.com",
  projectId: "auth-82b29",
  storageBucket: "auth-82b29.appspot.com",
  messagingSenderId: "146074680289",
  appId: "1:146074680289:web:9b0086f65526015240f0a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then(result => {
//       console.log({ result });
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// export const logOut = () => {
//   auth.signOut();

//   localStorage.removeItem("name");
//   localStorage.removeItem("email");
//   localStorage.removeItem("profilePic");
//   console.log({ auth });
// };
