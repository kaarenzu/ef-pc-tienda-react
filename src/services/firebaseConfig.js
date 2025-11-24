import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB69XjfRpujkAIWAK0fxmHAwcUsOHYAlC4",
    authDomain: "examen-final-prog-componentes.firebaseapp.com",
    projectId: "examen-final-prog-componentes",
    storageBucket: "examen-final-prog-componentes.appspot.com",
    messagingSenderId: "975582718930",
    appId: "1:975582718930:web:c213a0d1ee567f4f00360b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
