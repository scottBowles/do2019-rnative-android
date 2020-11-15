import { useEffect, useState } from "react";

export const useFetch = (query: string) => {
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
