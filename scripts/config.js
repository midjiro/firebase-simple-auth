import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js';

// Your web app's Firebase configuration
const CONFIG = {};

// Initialize Firebase
const APP = initializeApp(CONFIG);
// Reference to Firebase authentication service
const AUTH = getAuth(APP);

export default AUTH;
