import { db } from "../firebase/credenciales";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

export default async function crearPendiente(data) {
  try {
    const collectionRef = collection(db, "pendiente");
    const pendienteId = await addDoc(collectionRef, data);
    console.log(pendienteId.id);
    console.log(pendienteId);
  } catch (error) {
    console.error(error, ":( ");
  }
}
