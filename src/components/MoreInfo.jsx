import React from "react";
import useUser from "../hooks/useUser";

const MoreInfo = () => {
  const {authUser, data} = useUser();
  console.log(data);
  return (
    <div>
      <h1>Info del User</h1>
      <h2>Nombre: {authUser} </h2>
      <h2>Email: {data.email} </h2>
    </div>
  );
};

export default MoreInfo;
