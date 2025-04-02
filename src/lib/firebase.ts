import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, Database, DatabaseReference } from "firebase/database";

// Tipagem para a configuração do Firebase
interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyC_5187ACsNfTXvete_r_G9Z0ke3IfecTM",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "formularioportsamuelofcial.firebaseapp.com",
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "https://formularioportsamuelofcial-default-rtdb.firebaseio.com/",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "formularioportsamuelofcial",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "formularioportsamuelofcial.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "399475582021",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:399475582021:web:027ea7676bd049134caf2c",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-JJ1KZNRERG"
};

// Inicialização
const app = initializeApp(firebaseConfig);
const db: Database = getDatabase(app);

// Exportações tipadas
export { db, ref, set, type DatabaseReference };