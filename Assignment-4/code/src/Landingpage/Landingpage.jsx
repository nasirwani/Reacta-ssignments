/** @format */

import React from "react";
import { Link } from "react-router-dom";
import img from "../Images/insta1.jpg";
const Landingpage = () => {
  return (
    <>
      <div className="wrapper">
        <img src={img} className="landing" />
        <h3>Hello 10x Team 04</h3>
        <Link to="/Postview" className="btn">
          enter
        </Link>
      </div>
    </>
  );
};
export default Landingpage;
