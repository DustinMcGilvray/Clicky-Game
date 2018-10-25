import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
  <div className="card">
    <img className="card-img-top" alt={props.name} src={props.image}/>
  </div>
);

export default MemoryCard;