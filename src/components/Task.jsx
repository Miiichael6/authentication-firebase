import React from "react";
import { Button, Card } from "react-bootstrap";
import deleteMyPending from "../functions/deletePending";

export default function Task({
  contact,
  description,
  priority,
  id,
  refreshAllPendientes,
}) {
  const eliminarPendiente = () => {
    deleteMyPending(id);
    refreshAllPendientes();
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{contact}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{priority}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          {/* <button onClick={eliminarPendiente}>X</button> */}
          <Button variant="danger" size="sm" onClick={eliminarPendiente}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
