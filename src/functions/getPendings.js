import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/credenciales";

async function getAllPendings() {
  try {
    const pendientes = await getDocs(collection(db, "pendiente"));
    const documents = pendientes.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    console.log(documents);
    return documents;
  } catch (error) {
    console.error(error);
  }
}

export default getAllPendings;
