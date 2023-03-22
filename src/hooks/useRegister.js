import { useState } from "react";
import { registerUser } from "../apis/register";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const registerHandler = async (email, password) => {
    setLoading(true);
    try {
      await registerUser({ email, password });
      navigate("/");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { registerHandler, loading, error };
};
