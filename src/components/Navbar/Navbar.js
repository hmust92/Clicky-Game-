import React from "react";
import "./Navbar.css";

const Navbar = props => (
<div className="navbar">
  <a className="link" href={props.homeLink}>Clicky Game!</a>
  <p className= {props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}</p>
  <p className="scoreStuff">Score: {props.currentScore} | Top Score: {props.topScore}</p>
</div>

);

export default Navbar;