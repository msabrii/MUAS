import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props: { title: string; path: string; class?: string }) {
  const classes = "card-title " + props.class;
  return (
    <div className="card">
      <Link className="item-card" to={props.path}>
        <div className="overlay"></div>
        <div className={classes}>{props.title}</div>
      </Link>
    </div>
  );
}

export default Card;
