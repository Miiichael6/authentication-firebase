import { db } from "../firebase/credenciales";
import { doc, setDoc } from "firebase/firestore";

export default function createUser(id, data) {
  try {
    const { name, email } = data;
    const docuRef = doc(db, `users/${id}`);
    setDoc(docuRef, { name, email });
  } catch (error) {
    console.error(error);
  }
}
