import { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/api";
export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signIn = async (username, password) => {
    console.log(`Trying to sign in using ${username} and ${password}`);
    await axios
      .post(
        baseURL,
        {
          username: username,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log("response", response.data);
        setIsAuthenticated(true);
      })
      .catch((error) => console.log("error", error));
  };

  return { isAuthenticated, signIn };
}
