// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0opP6NvGb6lXFYgi_NZjakyq9RjMonSU",
    authDomain: "bayannor-kantho.firebaseapp.com",
    projectId: "bayannor-kantho",
    storageBucket: "bayannor-kantho.appspot.com",
    messagingSenderId: "843879658827",
    appId: "1:843879658827:web:a5c5fc0a424fa93dd564ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;