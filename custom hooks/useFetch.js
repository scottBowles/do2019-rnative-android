import { useEffect, useState } from "react";

const useFetch = (query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    if (!query) {
      console.log("no query");
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(query, {
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return [data, isLoading];
};

export default useFetch;
