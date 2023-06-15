 import { useEffect } from "react";
 import { useState } from "react";
 import firebase from "./firebase";
 import {
   getDatabase,
   ref,
   set,
   push,
   onValue,
   remove,
   update,
 } from "firebase/database";
 import { ToastifyAdd, ToastifyDelete, ToastifyUpdate } from "./toastify";
 export const AddUser = (info) => {
   const db = getDatabase(firebase);
   const useRef = ref(db, "users/");
   const newUserRef = push(useRef);
   set(newUserRef, {
     username: info.username,
     phoneNumber: info.phoneNumber,
     gender: info.gender,
   });
   ToastifyAdd("Added Successfully");
 };
 export const useFetch = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [contactList, setContactList] = useState();
   useEffect(() => {
     const db = getDatabase(firebase);
     const usersRef = ref(db, "users/");
     onValue(usersRef, (snapshot) => {
       const data = snapshot.val();
       const userArray = [];
       for (let id in data) {
         userArray.push({ id, ...data[id] });
       }
       setContactList(userArray);
       setIsLoading(false);
     });
   }, []);
   return { isLoading, contactList };
 };
 export const DeleteUser = (id) => {
   const db = getDatabase(firebase);
   remove(ref(db, "users/" + id));
   ToastifyDelete("Deleted Successfully");
 };
 export const UpdateUser = (info) => {
   ToastifyUpdate("Updated Successfully");
   const db = getDatabase(firebase);
   const updates = {};
   updates["users/" + info.id] = info;
   return update(ref(db), updates);
 };