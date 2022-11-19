import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./firebase/credenciales";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "./context/AuthContext";

const confirmAuth = {
  authUser: "Michael",
  data: {
    email: "Hola@quetal.com",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext.Provider value={confirmAuth}>
    <App />
  </AuthContext.Provider>
);
