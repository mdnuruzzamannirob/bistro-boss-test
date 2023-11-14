import { useEffect, useState } from "react";

const useFetch = (url, filter) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  }, [url]);

  useEffect(() => {
    if (filter) {
      const filteredData = data?.filter((menu) => menu.category === filter);
      setFilterData(filteredData);
    }
  }, [data, filter]);

  return { data, loader, filterData };
};

export default useFetch;
