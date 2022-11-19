import React, { useEffect, useState } from "react";
import Chat from "../components/Chat";
import MoreInfo from "../components/MoreInfo";
import NavBar from "../components/NavBar";
import PendienteForm from "../components/PendienteForm";
import SendMessage from "../components/SendMessage";
import Task from "../components/Task";
import getAllPendings from "../functions/getPendings";

export default function Home({ user }) {
  const [allPendientes, setAllPendientes] = useState(null);

  function refreshAllPendientes() {
    getAllPendings()
      .then((pend) => {
        setAllPendientes(pend);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    async function get() {
      const pends = await getAllPendings();
      if (allPendientes === null) {
        setAllPendientes(pends);
      }
    }
    get();
  }, []);

  return (
    <div>
      <NavBar user={user} />
      <h3>Hola {user.displayName ? user.displayName : user.data.name}</h3>
      <p>version 3!!!</p>

      {/* <PendienteForm refreshAllPendientes={refreshAllPendientes} />
      <div>
      {allPendientes &&
        allPendientes.map((pendiente, index) => (
          <Task
          refreshAllPendientes={refreshAllPendientes}
          key={index}
          contact={pendiente.contact}
          description={pendiente.description}
          priority={pendiente.priority}
          id={pendiente.id}
          />
          ))}
        </div> */}
      {/* <MoreInfo /> */}
      <h2>Mensajes</h2>
      <Chat user={user} />
    </div>
  );
}
