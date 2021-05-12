import styles from "./index.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { ADD_DOG, DOGS } from "../../consts.js";
import { Link } from "react-router-dom";
import picture from "./CustomDog.jpg";

// <div>Origin</div>
// <p>{x.origin}</p>
// <div>Weight</div>
// <p>{x.weight}kg</p>
// <div>Height</div>
// <p>{x.height}cm</p>

export default function MyDogs() {
  const dogs = useSelector((state) => state.customDogs);
  if (dogs.length === 0) {
    return (
      <div className={styles.noDogs}>
        <h1>Nothing to show but this good boy</h1>
        <p>
          <Link to={ADD_DOG}>Add some dogs</Link> to see your list here
        </p>
        <img
          src="https://images.baxterboo.com/global/images/article/fb260adb-5056-800a-6b36ac1f8ea66a67.jpg"
          alt=""
          className={styles.noDogs}
        />
      </div>
    );
  }
  let dogsData = dogs.map((x) => {
    return (
      <div className={styles.app} key={x.id}>
        <Link to={DOGS + "/" + x.id} className={styles.dogBox}>
          <div className={styles.imgWrapper}>
            <img src={picture} alt="" className={styles.imgFixer} />
          </div>
          <div>Breed Name</div>
          <p>{x.name}</p>
          <div>Temperaments</div>
          <p>{x.temperament}</p>
        </Link>
      </div>
    );
  });
  return <div className={styles.app}>{dogsData}</div>;
}
