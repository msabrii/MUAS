import "./HeroScreen.css";
import "../App.css";

import React from "react";

function HeroScreen() {
  return (
    <div className="hero-container">
      <video src="/videos/relax-anime.mp4" autoPlay loop muted />
      <h1>Manchester University Anime Society</h1>
      {/* <p>Join the weebs!</p> */}
    </div>
  );
}

export default HeroScreen;
