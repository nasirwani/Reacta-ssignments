/** @format */
import React from "react";
import logo from "./Images/logo.jpg";
const Header = () => {
  return (
    <>
      <div className="Head">
        <span className="logo">InstaClone</span>
        <div className="img">
          <img src={logo} alt="oip" className="img" />
        </div>
      </div>
    </>
  );
};
export default Header;
