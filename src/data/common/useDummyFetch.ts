import { useEffect, useState } from "react";

export function useDummyFetch<T>(
  query: string,
  returnValue: T
): [T | object, boolean] {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    if (!query) {
      console.log("no query");
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      const value: T = await new Promise((resolve) => {
        setTimeout(() => resolve(returnValue), 500);
      });
      setData(value);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return [data, isLoading];
}
