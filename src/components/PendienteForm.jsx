import React from "react";
import { Button } from "react-bootstrap";
import crearPendiente from "../functions/createPendings.js";

export default function PendienteForm({ refreshAllPendientes }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const priority = e.target.priority.value;
    const description = e.target.description.value;
    const contact = e.target.contact.value;

    console.log("==>", priority, description, contact);

    const data = { priority, description, contact };
    await crearPendiente(data);

    e.target.priority.value =
      e.target.description.value =
      e.target.contact.value =
        "";
    refreshAllPendientes();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="">
          prioridad:
          <select name="select" id="priority" className="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <br />
        <label htmlFor="">
          Description:
          <input type="text" id="description" className="form-control fs-6" />
        </label>
        <br />
        <label htmlFor="">
          contacto:
          <input type="email" id="contact" className="form-control" />
        </label>
        <br />
        <br />
        <Button variant="success" type="submit">
          Agregar
        </Button>
      </form>
    </div>
  );
}
