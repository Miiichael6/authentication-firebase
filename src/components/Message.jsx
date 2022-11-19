import React from "react";
import { Button } from "react-bootstrap";
import deleteMessage from "../functions/deleteMessage";

const Message = ({ msg, getAllMessages, user }) => {
  const borrarMensaje = () => {
    deleteMessage(msg.id);
    // getAllMessages();
  };

  return (
    <div>
      <div className="d-flex">
        <h5>{msg.nombre}</h5>
        <p>{msg.texto}</p>
        <Button size="sm" onClick={borrarMensaje}>
          X
        </Button>
      </div>
      <hr />
    </div>
  );
};

export default Message;
