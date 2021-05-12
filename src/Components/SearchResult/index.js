import { useSelector } from "react-redux";
import * as helper from "./helper.js";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { DOGS } from "../../consts.js";

export default function SearchResult({ data, orderW, orderABC }) {
  const dogoArgentino = "https://i.imgur.com/3NWxcVq.jpg";
  let show;
  let state = useSelector((state) => state.customDogs.concat(state.apiDogs));
  if (typeof data.value === "string") {
    //Si recibimos raza, traemos todas las razas que tengan ese nombre
    let filterResult = state
      .filter((x) => x.name !== undefined)
      .filter((y) => y.name.includes(data.value));
    show = filterResult.map((x) => {
      console.log(x);
      return (
        <Link to={DOGS + "/" + x.id} className={styles.dogBox} key={x.id}>
          <div className={styles.imgWrapper}>
            <img
              src={x?.image?.url ? x.image.url : dogoArgentino}
              alt=""
              className={styles.imgFixer}
            />
          </div>
          <div>Breed Name</div>
          <p>{x.name}</p>
          <div>Temperaments</div>
          <p>{x.temperament}</p>
          <div>More details</div>
        </Link>
      );
    });
  } else {
    //Sino, traemos a las razas que coincidan con los temperamentos
    let filterResult = state
      .filter((x) => x.temperament !== undefined)
      .filter((y) => y.temperament.includes(data["label"]));
    if (orderW.value === 1) {
      filterResult = helper.sortAscending(filterResult);
    }
    if (orderW.value === 2) {
      filterResult = helper.sortDescending(filterResult);
    }
    if (orderABC.value === 1) {
      filterResult = helper.sortAtoZ(filterResult);
    }
    if (orderABC.value === 2) {
      filterResult = helper.sortZtoA(filterResult);
    }
    show = filterResult.map((x) => {
      return (
        <Link to={DOGS + "/" + x.id} className={styles.dogBox} key={x.id}>
          <div>
            <div className={styles.imgWrapper}>
              <img
                src={x?.image?.url ? x.image.url : dogoArgentino}
                alt=""
                className={styles.imgFixer}
              />
            </div>
            <div>Breed Name</div>
            <p>{x.name}</p>
            <div>Weight</div>
            <p>{x?.weight?.metric ? x.weight.metric : x.weight}kg</p>
            <div>Temperaments</div>
            <p>{x.temperament}</p>
          </div>
        </Link>
      );
    });
  }
  return <div className={styles.app}>{show}</div>;
}
