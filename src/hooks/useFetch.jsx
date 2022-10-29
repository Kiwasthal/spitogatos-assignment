import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url, updateDefault) => {
  let [data, setData] = useState([]);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
};

export default useFetch;
