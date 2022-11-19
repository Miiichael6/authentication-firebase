import React from "react";
import crearMensaje from "../functions/createMessage";

const SendMessage = ({ user }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let message = e.target.message.value;

    const data = {
      texto: message,
      user: user.uid,
      nombre: user.displayName ? user.displayName : user.data.name,
      date: Date.now(),
    };
    console.log(data);
    console.log(user);

    e.target.message.value = "";
    await crearMensaje(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="message" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SendMessage;
