import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// import getMessages from "../functions/getMessages";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { db } from "../firebase/credenciales"

const Chat = ({ user }) => {
  const [messages, setMessages] = useState(null);

  // const getAllMessages = () => {
  //   getMessages().then((res) => {
  //     setMessages(res);
  //   });
  // };

  useEffect(() => {
    const q = query(collection(db, "messages"))
    const unSubscribe = onSnapshot(q, querySnapshot => {
      let msgs = [];
      querySnapshot.forEach(doc => {
        msgs.push({ id: doc.id, ...doc.data() })
      });
      const orderMessages = msgs.map(i => i).sort((a, b) => a.date - b.date);

      setMessages(orderMessages);
    })
    return () => unSubscribe()
  }, []);

  return (
    <div>
      {messages &&
        messages.map((msg, index) => (
          <Message
            key={index}
            msg={msg}
            // getAllMessages={getAllMessages}
            user={user}
          />
        ))}
      <SendMessage user={user}
      //  getAllMessages={getAllMessages} 
      />
    </div>
  );
};

export default Chat;
