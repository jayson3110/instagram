import  Firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';

// here i want to import the seed file


const config ={
   
    apiKey: "AIzaSyBODOs_BcE09NoVWgC2RtnngonbieywW3o",
    authDomain: "instagram-10f0d.firebaseapp.com",
    projectId: "instagram-10f0d",
    storageBucket: "instagram-10f0d.appspot.com",
    messagingSenderId: "843691640725",
    appId: "1:843691640725:web:34b8a299e126992c46989c"

};
const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;





export  {firebase, FieldValue};
