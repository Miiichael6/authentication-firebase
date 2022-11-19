import React from "react";
import { Button } from "react-bootstrap";
import logOut from "../functions/logOut";

export default function NavBar({ user }) {
  return (
    <div>
      <Button onClick={logOut} variant="outline-danger">
        Log Out
      </Button>
      <p>{user.email}</p>
    </div>
  );
}
