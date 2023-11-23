import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  // Use useParams to get the 'id' parameter from the URL
  const { id } = useParams();
  const [dynamicimage, SetdynamicImgage] = useState("");

  const [product, setProduct] = useState(null);
  //if you clicked the samll image i will chnange acroding to click
  const handleImgage = (imglink) => {
    SetdynamicImgage(imglink);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();

        console.log(data.images);
        setProduct(data); // Assuming your API returns details of a single product
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Display the details of the individual product
  return (
    <div className="single-product">
      <img
        src={`${dynamicimage ? dynamicimage : product.thumbnail}`}
        alt=""
        className="thumbail"
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>{product.price}</h4>
      <div className="small-img">
        {product.images &&
          product.images.map((ele, i) => (
            <img
              key={i}
              src={`${ele}`}
              alt=""
              onClick={(e) => handleImgage(ele)}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductDetail;
