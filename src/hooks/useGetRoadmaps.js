import { useState, useEffect } from "react";
import { getRoadmaps } from "../apis/roadmaps";

const useGetRoadmaps = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getRoadmaps();
      setData(response.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, fetchData, loading, error };
};

export default useGetRoadmaps;