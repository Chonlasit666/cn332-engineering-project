import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBZ-nM35HLJVLDVnLG46TA0ZrxmpIhhDi8",
    authDomain: "top-cubist-344010.firebaseapp.com",
    projectId: "top-cubist-344010",
    storageBucket: "top-cubist-344010.appspot.com",
    messagingSenderId: "718490534564",
    appId: "1:718490534564:web:72bc5c97d2f358a6df1c31",
    measurementId: "G-DW1JBF7LWE"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };