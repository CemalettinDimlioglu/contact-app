import firebase from "./firebase"
import { getDatabase, ref, set,push } from "firebase/database";
export const AddUser=(info)=> {
  const db = getDatabase(firebase);
  const useRef= ref(db, 'users/');
  const newUserRef= push(useRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender
  });
}








