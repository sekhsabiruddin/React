import React, { useState } from "react";
const data = [
  {
    id: 1,
    content:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quaerat modi rerum aperiam itaque dicta dolorum alias hic officiis. Ipsa debitis excepturi dicta?",
    expand: false,
  },
  {
    id: 2,
    content:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quaerat modi rerum aperiam itaque dicta dolorum alias hic officiis. Ipsa debitis excepturi dicta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quaerat modi rerum aperiam itaque dicta dolorum alias hic officiis. Ipsa debitis excepturi dicta? Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    expand: false,
  },
  {
    id: 3,
    content:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quaerat modi rerum aperiam itaque dicta dolorum alias hic officiis. Ipsa debitis excepturi dicta? eriam itaque dicta dolorum alias hic officiis. Ipsa debitis excepturi ",
    expand: false,
  },
];
const App = () => {
  const [allData, setAllData] = useState(data);
  const hanndleExpand = (id) => {
    const filterData = allData.map((item, i) => {
      if (item.id === id) {
        return { ...item, expand: !item.expand };
      }
      return { ...item };
    });
    setAllData(filterData);
  };
  return (
    <div>
      {allData &&
        allData.map((item, i) => (
          <div key={i}>
            {/* <span>{item.content.substring(0, 100)}</span> */}
            {item.expand === true ? (
              <span>
                {item.content.substring(0, 100)}{" "}
                <span
                  className="text-cyan-400 cursor-pointer"
                  onClick={() => hanndleExpand(item.id)}
                >
                  Read more...
                </span>{" "}
              </span>
            ) : (
              <span>
                {item.content}{" "}
                <span
                  className="text-[#3c1696] cursor-pointer"
                  onClick={() => hanndleExpand(item.id)}
                >
                  Read less...
                </span>
              </span>
            )}
          </div>
        ))}
    </div>
  );
};

export default App;
