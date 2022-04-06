/** @format */

import React from "react";
function Moviesinfo(props) {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <h1>{props.name}</h1>
          <p>{props.employeeId}</p>
        </div>
        <div className="section">
          <div className="box1">
            <h3>Appointment:</h3>
            <p>{props.appointment}</p>
          </div>

          <div className="box2">
            <h3>Phone:</h3>
            <p>{props.phone}</p>
          </div>
          <div className="box3">
            <h3>Email:</h3>
            <p> {props.email}</p>
          </div>
        </div>
        <div className="status">
          <div className="box4">
            <h3>Status:</h3>
            <p>{props.status}</p>
          </div>
          <div className="box5">
            <h3>Door:</h3>
            <p>{props.door}</p>
          </div>
          <div className="box6">
            <h3>Time:</h3>
            <p>{props.time}</p>
          </div>
        </div>

        <div className="prolist">
          <img src={props.imgsrc} />
          <div className="box6">
            <h1>{props.prodlist}</h1>
            <p>{props.des}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Moviesinfo;
