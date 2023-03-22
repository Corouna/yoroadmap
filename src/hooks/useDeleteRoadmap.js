import { useState } from "react";
import { deleteRoadmap } from "../apis/roadmaps";
import { useNavigate } from "react-router-dom";

const useDeleteRoadmap = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const deleteRoadmapHandler = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await deleteRoadmap(id);
      setLoading(false);
      return data; 
      
    } catch (err) {
      setError(err);
    }
  };

  return { deleteRoadmapHandler, loading, error };
};

export default useDeleteRoadmap;