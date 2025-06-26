// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, set, Database } from "firebase/database";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_5187ACsNfTXvete_r_G9Z0ke3IfecTM",
  authDomain: "formularioportsamuelofcial.firebaseapp.com",
  databaseURL: "https://formularioportsamuelofcial-default-rtdb.firebaseio.com/",
  projectId: "formularioportsamuelofcial",
  storageBucket: "formularioportsamuelofcial.firebasestorage.app",
  messagingSenderId: "399475582021",
  appId: "1:399475582021:web:027ea7676bd049134caf2c",
  measurementId: "G-JJ1KZNRERG"
};

// 🔹 Função que inicializa sob demanda
export function getFirebaseDb(): Database {
  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  return getDatabase(app);
}

// 🔹 Exporte também ref e set normalmente
export { ref, set };
