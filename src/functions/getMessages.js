import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/credenciales";

async function getMessages() {
  try {
    // const collectionMsg = await getDocs(collection(db, "messages"));
    // const documents = collectionMsg.docs.map((d) => {
    //   return {
    //     id: d.id,
    //     ...d.data(),
    //   };
    // });
    // const myMessages = documents.map((i) => i).sort((a, b) => a.date - b.date);

    const q = query(collection(db, "messages"));
    const querySnapshot = await getDocs(q);
    const myDocs = [];
    querySnapshot.forEach((doc) => {
      let d = { ...doc.data(), id: doc.id };
      myDocs.push(d);
    });
    const orderDocs = myDocs.map((i) => i).sort((a, b) => a.date - b.date);


    return orderDocs;
  } catch (error) {
    console.error(error);
  }
}

export default getMessages;
