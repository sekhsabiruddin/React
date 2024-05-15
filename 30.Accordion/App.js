import React, { useState } from "react";
import "./Accordion.css";
function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${index === activeIndex ? "active" : ""}`}
        >
          <div className="accordion-header" onClick={() => onItemClick(index)}>
            {item.header}
          </div>
          <div className="accordion-content">
            {index === activeIndex && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const accordionItems = [
    { header: "Section 1", content: "Content of section 1" },
    { header: "Section 2", content: "Content of section 2" },
    { header: "Section 3", content: "Content of section 3" },
    { header: "Section 4", content: "Content of section 4" },
    { header: "Section 5", content: "Content of section 5" },
  ];

  return (
    <div className="App">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;
