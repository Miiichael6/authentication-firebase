// Importar initializeApp
// 1 + traer la data dada en FireBase con nuestras
// credenciales

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// 2 + Importamos getAuth de => "firebase/auth"

import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAa2QTjFfqpto1_2AEG83JfLGfYIyoGBJ4",
  authDomain: "michael-canales.firebaseapp.com",
  projectId: "michael-canales",
  storageBucket: "michael-canales.appspot.com",
  messagingSenderId: "663795356660",
  appId: "1:663795356660:web:0c64a0aa03e4c5d1d35fa1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// 3 + la autenticacion de Firebase, con
//     getAuth y de parametro la inicializacion
//     exportar esa auth

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp); // ó db- database
export default firebaseApp;

// decirle que vamos a usarel servicio de autenticacion
