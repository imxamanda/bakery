import { initializeApp, getApp } from "firebase/app";
import { getDatabase, set, ref } from 'firebase/database'

let app
try {
    app = getApp()
} catch (any) {

    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DB_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };

    app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)
export { db, set, ref }