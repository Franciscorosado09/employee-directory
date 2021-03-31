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
            <strong>First Name:</strong> {props.name}
          </li>
          <li>
            <strong>Last Name:</strong> {props.lastname}
          </li>
          <li>
            <strong>email:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>State:</strong> {props.state}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;
