import React, { useState } from "react";
import { UserContext } from "./userContext";

const LoginContext = ({ subPages }) => {
  const [token, setToken] = useState("");
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {subPages}
    </UserContext.Provider>
  );
};
export default LoginContext;
