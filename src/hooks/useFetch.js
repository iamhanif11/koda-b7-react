import { useState, useEffect } from "react";

function useFetch(url) {
  /**
   * fitur
   * 1.ambil permintaan saat perubahan url
   * 2.loading state
   * 3 error handling
   */

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Gagal ambil data");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.massage);
      } finally {setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
