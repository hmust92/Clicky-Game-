import React from "react";
import "./Navbar.css";

const Navbar = props => (
<div className="navbar">
  <a className="link" href={props.homeLink}>Clicky Game!</a>
  <p className="instructions">Click an image to begin with!</p>
  <p className="scoreStuff">Score: {props.currentScore} | Top Score: {props.topScore}</p>
</div>

);

export default Navbar;