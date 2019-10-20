import React from "react";
import "./style.css";

function Card({ title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3 className="title">
           {title}
          
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
