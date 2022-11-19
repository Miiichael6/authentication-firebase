import { createContext } from "react";

const AuthContext = createContext({
  authUser: null,
  data: null,
})

export default AuthContext