import { useState } from "react";
import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
import { auth } from "./firebase/credenciales";
import { onAuthStateChanged } from "firebase/auth";
import getUserData from "./functions/getUserData";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userIniciado) => {
    if (userIniciado) {
      const UID = userIniciado.uid;
      if (!user) {
        getUserData(UID).then((data) => {
          const userData = {
            uid: userIniciado.uid,
            email: userIniciado.email,
            displayName: userIniciado.displayName,
            data: data,
          };
          setUser(userData);
        });
      }
    } else {
      setUser(null);
    }
  });

  return user ? <Home user={user} /> : <Login />;
}

export default App;
