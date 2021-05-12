import React from "react";
import "./index.css";
import { DOGS } from "../../consts.js";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      {" "}
      <div className="welcomen-show">
        <div className="animate-reveal animate-first">
          Welcome to Henry Dogs{" "}
        </div>
        <NavLink exact to={DOGS}>
          <button className="enter">Enter</button>
        </NavLink>
        <div className="animate-reveal animate-second">by Leonardo Rosales</div>
      </div>
    </>
  );
}
