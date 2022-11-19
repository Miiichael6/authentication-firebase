import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";


// Metodo de Registro con Email y Contraseña 
export default async function registerUser(email, password, name) {
  try {
    //  llamamos a "createUserWithEmailAndPassword"
    // dentro de una funcion asincrona
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user, "resgitrando");
    return user
  } catch (error) {
    console.error(error);
  }
}
