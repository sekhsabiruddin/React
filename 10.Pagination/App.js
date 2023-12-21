import React, { useEffect, useState } from "react";

const App = () => {
  const [apidata, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await response.json();
      setApiData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = apidata.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(apidata.length / postsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>Content</h1>
      <div className="outer-box">
        {currentPosts.map((ele, i) => (
          <div className="box" key={i}>
            <h4>{ele.title}</h4>
            <p>{ele.body}</p>
          </div>
        ))}
      </div>
      <div className="pagination-box">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: Math.ceil(apidata.length / postsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              style={{
                backgroundColor: currentPage === index + 1 ? "black" : "white",
                color: currentPage === index + 1 ? "white" : "black",
                cursor: "pointer",
                margin: "0.5rem",
              }}
            >
              {index + 1}
            </button>
          )
        )}
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(apidata.length / postsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
