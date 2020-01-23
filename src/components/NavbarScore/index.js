import React from "react";
import "./style.css";

//stateless component
const NavbarScore = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      <h3> Walking Dead Clicky Game! </h3>
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto"></ul>
      <div className="currentScore">
        <h3 className="userScore">Your Score {props.total}</h3>
        <h3 className="status">{props.status}</h3>
      </div>
    </div>
  </nav>
);

export default NavbarScore;
