import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <span onClick={() => props.shuffleFriend(props.id)} className="shuffle">
          <img alt={props.name} src={props.image} />
        </span>
      </div>
    </div>
  );
}

export default FriendCard;
