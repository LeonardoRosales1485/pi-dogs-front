import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DOGS } from "../../consts.js";
import styles from "./index.module.css";

const dogoArgentino = "https://i.imgur.com/3NWxcVq.jpg";

export const DogDetails = ({ dog }) => {
  let thisDoggo = useSelector((state) =>
    state.customDogs
      .concat(state.apiDogs)
      .filter((x) => x.id.toString() === dog)
      .shift()
  );
  let noData = "Unknown";
  let doggoCard = (
    <div className={styles.dogBox}>
      <img
        src={thisDoggo?.image?.url ? thisDoggo.image.url : dogoArgentino}
        alt=""
        className={styles.imgFixer}
      />
      <div>
        <label className={styles.test}>Name</label> {thisDoggo.name}
        <hr />
        <label className={styles.test}>Origin</label>{" "}
        {thisDoggo.origin === "" || thisDoggo.origin === undefined
          ? noData
          : thisDoggo.origin}
        <hr />
        <label className={styles.test}>Temperament(s)</label>
        <p>
          {" "}
          {thisDoggo.temperament === "" || thisDoggo.temperament === undefined
            ? noData
            : thisDoggo.temperament}
        </p>
        <hr />
        <label className={styles.test}>Weight</label>{" "}
        {thisDoggo?.weight?.metric ? thisDoggo.weight.metric : thisDoggo.weight}{" "}
        kg
        <hr />
        <label className={styles.test}>Height</label>{" "}
        {thisDoggo?.height?.metric ? thisDoggo.height.metric : thisDoggo.height}{" "}
        cm
        <hr />
        <label className={styles.test}>Life Span</label> {thisDoggo.life_span}
      </div>
    </div>
  );

  return (
    <div>
      <NavLink exact to={DOGS} className={styles.botoncito}>
        <button className={styles.decoracion}>Back to dogs</button>
      </NavLink>
      <div>{doggoCard}</div>
    </div>
  );
};
