import React from "react";
import dyn from "./Card.module.css";
function Card(props) {
  return <div className={dyn.card}>{props.children}</div>;
}

export default Card;
