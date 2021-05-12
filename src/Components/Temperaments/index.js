import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Asc } from "./Asc";
import { Desc } from "./Desc";
import axios from "axios";
const { HOST, TEMPERS } = require("../../consts.js");

export default function Temperaments() {
  const [temperaments, setTemperaments] = useState([]);

  useEffect(() => {
    axios
      .get(HOST + TEMPERS)
      .then((response) => setTemperaments(response["data"]));
  }, []);

  const [order, setOrder] = useState(true);
  function handleClick1() {
    setOrder(true);
  }
  function handleClick2() {
    setOrder(false);
  }
  return (
    <div className={styles.app}>
      <div>
        Here you can see the list of temperaments in{" "}
        <button onClick={handleClick1}>ascending</button> or{" "}
        <button onClick={handleClick2}>descending</button> order
        <p>Click on any of these to see all the dogs with that temperament!</p>
      </div>
      {order ? <Asc state={temperaments} /> : <Desc state={temperaments} />}
    </div>
  );
}
