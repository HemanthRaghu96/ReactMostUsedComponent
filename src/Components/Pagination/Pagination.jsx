import React, { useEffect, useState } from "react";
import axios from "axios";
const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`https://dummyjson.com/products?limit=100`);
      setData(res.data.products);
    };
    fetchData();
  }, [page]);
  const handlePage = (pageNum) => {
    if (pageNum >= 1 && pageNum < data.length / 15 && pageNum !== page) {
      setPage(pageNum);
    }
  };

  return (
    <div>
    <h1 className="text-4xl flex justify-center items-center mt-5 font-bold">Pagination</h1>
      <div className="grid grid-cols-5 mx-auto w-[900px] mt-5">
        {data.slice(page * 15 - 15, page * 15).map((item, i) => (
          <div
            className="flex flex-col justify-center items-center size-[170px] border-[1px] rounded-md mt-5"
            key={i}
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="size-[100px]"
            />
            <h1>{item.title.slice(0, 15)}</h1>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-2">
        <button onClick={() => handlePage(page - 1)}>◀️</button>
        {[...Array(Math.floor(data.length / 15))].map((_, i) => (
          <button key={i} className="size-7" onClick={() => handlePage(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button onClick={() => handlePage(page + 1)}>▶️</button>
      </div>
    </div>
  );
};

export default Pagination;
