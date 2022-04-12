/** @format */
import React from "react";
import like from "./Images/like.png";
import send from "./Images/send.png";
import insta from "./Images/insta.jpg";

const Data = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <h1>{props.name}</h1>
          <p>{props.location}</p>
        </div>
        <div className="main-img">
          <img src={insta} />
        </div>
        <div className="icons">
          <img src={like} className="like" />
          <img src={send} className="send" />

          <span>
            <p className="date">12 jan 2021</p>
          </span>
        </div>

        <div className="top">
          <p>{props.likes} likes</p>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};
export default Data;
