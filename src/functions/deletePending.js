import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from "../firebase/credenciales";

export default async function deleteMyPending(id) {
  try {

    // se le pasa la coleccion =>{

      // const collectionRef = collection(db, "pendiente");
      // const docuRef = doc(collectionRef, id);

    // }
    // debemos de pasarle el ID del documento para eliminarlo

    
    await deleteDoc(doc(db, "pendiente", id));
    console.log("pase");
  } catch (error) {
    console.log(error);
  }
}
