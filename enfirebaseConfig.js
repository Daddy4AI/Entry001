import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getFirestore, initializeFirestore, persistentLocalCache } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

// Firebase 配置
export const firebaseConfig = {
    apiKey: "AIzaSyAE5OL3jOqHrXz4VRlN-Im3sDyiMJq2PG0",
    authDomain: "entry001.firebaseapp.com",
    projectId: "entry001",
    storageBucket: "entry001.firebasestorage.app",
    messagingSenderId: "39651467700",
    appId: "1:39651467700:web:05392de9285dfcf72d12e1"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 初始化 Firestore with caching enabled
export const db = initializeFirestore(app, {
    cache: persistentLocalCache()
});
