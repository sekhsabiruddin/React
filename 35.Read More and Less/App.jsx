import React, { useState } from "react";

const App = () => {
  const [expanded, setExpanded] = useState([false, false, false]);

  const toggleReadMore = (index) => {
    setExpanded((prevExpanded) =>
      prevExpanded.map((item, i) => (i === index ? !item : item))
    );
  };

  const textData = [
    {
      id: 1,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet fugit non laudantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi nostrum placeat harum! Magnam, laudantium tempora similique dolorem aut numquam voluptas pariatur eum ratione nam. Repudiandae ducimus porro est ad odio.",
    },
    {
      id: 2,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet fugit non laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero quia at delectus. Reprehenderit voluptatibus quae consequatur repellendus perspiciatis minima.",
    },
    {
      id: 3,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet fugit non laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos, minus omnis, maiores accusamus distinctio architecto suscipit possimus totam dolor natus adipisci.",
    },
  ];

  return (
    <div className="flex gap-5 flex-col">
      {textData.map((item, index) => (
        <div key={item.id}>
          <span>{item.id}:</span>
          <span>
            {expanded[index]
              ? item.content
              : `${item.content.substring(0, 100)}...`}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => toggleReadMore(index)}
            >
              {expanded[index] ? " Read less" : " Read more"}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default App;
