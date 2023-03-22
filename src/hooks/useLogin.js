import { useState, useContext } from "react";
import { login } from "../apis/login";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  const loginHandler = async (email, password) => {
    setLoading(true);
    try {
      const response = await login({ username: email, password: password });
      console.log("data from api for login", response.data);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log(token);
      navigate("/");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loginHandler, loading, error, token };
};

export default useLogin;