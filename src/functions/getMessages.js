import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/credenciales";

async function getMessages() {
  try {
    const collectionMsg = await getDocs(collection(db, "messages"));
    const documents = collectionMsg.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      };
    });
    const myMessages = documents.map((i) => i).sort((a, b) => a.date - b.date);

    return myMessages;
  } catch (error) {
    console.error(error);
  }
}

export default getMessages;
