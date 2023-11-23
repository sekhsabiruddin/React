import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [apidata, setApidata] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data.products);
      setApidata(data.products); // Assuming you want to update state with the fetched data
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card-container">
      {apidata &&
        apidata.map((ele, i) => (
          <Link to={`/product/${ele.id}`} key={i} className="card-box">
            {/* Link to the product details page with the product's ID */}
            <div>
              <div className="img-box">
                <img src={`${ele.thumbnail}`} alt="" />
              </div>
              <h4>{ele.title}</h4>
              <p>{ele.description}</p>
              <h4>{ele.price}</h4>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Home;
