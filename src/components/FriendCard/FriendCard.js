import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => props.selectFriend(props.name)} 
                className={props.currentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img className="theImage" alt={props.name} src={props.image} />
            </a>
    </div>


  </div>
);

export default FriendCard;
