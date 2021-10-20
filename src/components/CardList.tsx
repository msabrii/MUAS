import React from "react";
import Card from "./Card";
import "./CardList.css";

function CardList() {
  return (
    <div className="card-grid">
      <Card title="COMMITTEE" path="/committee" class="committee" />
      <Card title="MUDAE" path="/mudae" class="mudae" />
      <div className="events-card">
        <Card title="EVENTS" path="/events" class="events" />
      </div>
    </div>
  );
}

export default CardList;
