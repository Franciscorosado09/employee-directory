import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Full Name:</strong> {props.name} {props.lastname} <strong>Age:</strong> {props.age}
          </li>
          
          
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.location}, {props.state}
          </li>
          
        </ul>
      </div>
      <span onClick={() => props.removeEmployee(props.key)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;
