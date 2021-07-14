import {useContext} from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';


export default function Header() {
   const {firebase} = useContext(FirebaseContext);
   const {user} = useContext(UserContext);
   
   console.log("user", user.displayName);      
   return <p> I am the Header </p>

}