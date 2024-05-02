import React, { useState, useEffect } from "react";

const App = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div>
      {card.map((data) => (
        <div key={data.id} className="card">
          <div className="card-info">
            <p className="card-id">{data.id}</p>
            <p>{data.body.substr(0, 150)}</p>
            <h2>{data.title.substr(0, 15)}</h2>
          </div>
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default App;
