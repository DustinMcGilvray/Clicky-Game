import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (



  <div value={props.id} onClick={() => props.handleCardClick(props.id)} className="card shadow-lg">
    <img className="card-img-top" src={props.image} alt={props.name}/>
  </div>
);

export default MemoryCard;