import React, { useEffect, useState } from "react";
import getMessages from "../functions/getMessages";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState(null);

  const getAllMessages = () => {
    getMessages().then((res) => {
      setMessages(res);
    });
  };

  useEffect(() => {
    getAllMessages();
    return () => getMessages();
  }, []);

  return (
    <div>
      {messages &&
        messages.map((msg, index) => (
          <Message
            key={index}
            msg={msg}
            getAllMessages={getAllMessages}
            user={user}
          />
        ))}
      <SendMessage user={user} getAllMessages={getAllMessages} />
    </div>
  );
};

export default Chat;
