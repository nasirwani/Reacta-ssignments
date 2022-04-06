/** @format */

import React from "react";
function Card(props) {
  return (
    <>
      <div className="wrapper">
        <img src={props.imgsrc} />
        <h1 className="name">{props.name}</h1>
        <p>location</p>
        <h2>{props.location}</h2>
        <p>Blood group</p>
        <h2>{props.bloodGroup}</h2>
        <p>Age</p>
        <h2>{props.age}</h2>
      </div>
    </>
  );
}
export default Card;
