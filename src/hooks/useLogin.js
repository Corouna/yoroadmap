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
    // setTimeout(() => navigate("/"), 200);

    setLoading(true);
    try {
      // const response = await login({ username: email, password: password });
      setToken(true);
      localStorage.setItem("token", true);
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