import { auth } from "../firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";

//
const LoginWithEmailPassword = async (email, password) => {
  try {
    //
    const usuario = await signInWithEmailAndPassword(auth, email, password);
    console.log(usuario);
    console.log(usuario.user.email);

    return {
      data: usuario,
      email: usuario.user.email,
    };
  } catch (err) {
    console.error(err);
    console.error(err.message);
    return {
      err: err.message,
    };
  }
};

export default LoginWithEmailPassword;
