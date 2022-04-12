/** @format */

import React, { useState } from "react";
import arr from "./Components/List";
import Card from "./Components/Card";
import "./App.css";
const App = () =>
  arr.map((val) => {
    return (
      <Card
        name={val.name}
        employeeId={val.employeeId}
        appointment={val.appointment}
        email={val.email}
        phone={val.phone}
        status={val.status}
        door={val.door}
        time={val.time}
        imgsrc={val.profileImg}
        prodlist={val.prodlist}
        des={val.des}
      />
    );
  });
export default App;
