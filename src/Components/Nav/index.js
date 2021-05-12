import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { DOGS, DETAILS, ADD_DOG, MY_DOGS } from "../../consts.js";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink exact to="/" >Home</NavLink>
          <NavLink exact to={DOGS} activeStyle={{ backgroundColor: "#b99a02" }}>Dogs</NavLink>
          <NavLink to={DETAILS} activeStyle={{ backgroundColor: "#b99a02" }}>Detailed info</NavLink>
          <NavLink to={ADD_DOG} activeStyle={{ backgroundColor: "#b99a02" }}>Add a new dog breed!</NavLink>
          <a href={MY_DOGS}>My Dogs</a>
        </li>
      </ul>
    </nav>
  );
}
