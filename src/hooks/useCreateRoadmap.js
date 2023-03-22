import { useState } from "react";
import { createRoadmap } from "../apis/roadmaps";
import { useNavigate } from "react-router-dom";

const useCreateRoadmap = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const createRoadmapHandler = async (roadmap) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await createRoadmap(roadmap);
      setLoading(false);
      return data; 
      
    } catch (err) {
      setError(err);
    }
  };

  return { createRoadmapHandler, loading, error };
};

export default useCreateRoadmap;