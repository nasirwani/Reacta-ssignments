/** @format */

import React, { useEffect, useState } from "react";
import "./Postview.css";

const Postview = () => {
  const [newdata, setData] = useState([]);
  const UpdateData = async () => {
    const data = await fetch("http://localhost:3004/user");
    const FinData = data.json();
    setData(FinData);
  };
  useEffect(() => {
    UpdateData();
  }, []);
  return (
    <>
      {newdata.map((ele, idx) => {
        return (
          <Data
            key={idx}
            name={ele.Name}
            location={ele.location}
            likes={ele.likes}
            imgsrc={ele.PostImage}
            date={ele.date}
            description={ele.description}
            image={ele.PostImage}
          />
        );
      })}
    </>
  );
};

export default Postview;
