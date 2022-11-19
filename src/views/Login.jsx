import React, { useState } from "react";
import LoginWithEmailPassword from "../functions/LoginWithEmailPassword";
import registerUser from "../functions/registerUser";
import loginWithGoogle from "../functions/loginWithGoogle";
import createUser from "../functions/createUser";

export default function Login({ user }) {
  const [isLogginIn, setIsLogginIn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.email.value;
    const password = e.target.password.value;

    if (isLogginIn) {
      await LoginWithEmailPassword(username, password);
    } else {
      const infoUser = await registerUser(username, password);
      const data = {
        name: name,
        email: username,
      };

      createUser(infoUser.user.uid, data);
    }
  };

  return (
    <div>
      <h1>{isLogginIn ? "Inicia Sesión" : "Registrate"}</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="username" className="form-label text-danger">
          username:{" "}
        </label>
        {!isLogginIn && (
          <input
            type="text"
            className="form-control fs-5 fw-ligth"
            placeholder="name"
            id="name"
          />
        )}
        <input
          type="email"
          className="form-control fs-5 fw-ligth"
          placeholder="@example.com"
          id="email"
        />
        <label htmlFor="password">password: </label>
        <input
          type="password"
          className="form-control fs-5 fw-ligth"
          placeholder="Password..."
          id="password"
        />
        <br />

        <button className="rounded-1 btn bg-success" type="submit">
          {isLogginIn ? "Acceder" : "Registrate"}
        </button>
      </form>
      <div className="d-grid gap-2 d-md-block">
        <br />
        <button
          className="rounded-1 bg-primary btn btn-md"
          onClick={loginWithGoogle}
        >
          Accede Con Google
        </button>
        <button
          className="rounded-2 bg-danger btn fw-bold"
          onClick={() => setIsLogginIn(!isLogginIn)}
        >
          {isLogginIn
            ? "No tienes Cuenta? crea una"
            : "Ya tienes cuenta? Acceder"}
        </button>
      </div>
    </div>
  );
}
