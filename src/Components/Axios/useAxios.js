// useAxios.js - Custom Axios hook
import { useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = async (config) => {
    setLoading(true);
    try {
      const response = await axios(config);
      setData(response.data);
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  return { loading, error, data, sendRequest };
};

export default useAxios;
