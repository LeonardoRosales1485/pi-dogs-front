import React, { useState } from "react";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as helper from "./helpers";
import { loadData } from "../../Reducers";
import { addDog } from "../../Actions";

export const AddDog = () => {
  let state = useSelector((state) => state.customDogs);
  const dispatch = useDispatch();
  let flag = false;
  const [data, setData] = useState({
    name: "",
    origin: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperament: "",
  });

  function handleOnChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submit(e, state) {
    e.preventDefault()
    dispatch(addDog(data));
    dispatch(loadData());
    setData(helper.reset());
  }

  return (
    <div className={styles.AddDogs}>
      <div className={styles.title}>All fields are obligatory!</div>
      <form
        className={styles.formWindow}
        id="addDog"
        onSubmit={(e) => {
          flag = helper.checker(e, flag);
          if (!flag) submit(e, state);
        }}
      >
        <div>Breed name</div>
        <input
          type="text"
          name="name"
          onChange={(e) => handleOnChange(e)}
          value={data.name}
          id="name"
          placeholder="Name..."
          required
        />
        <span>Origin</span>
        <input
          type="text"
          onChange={(e) => handleOnChange(e)}
          value={data.origin}
          id="origin"
          placeholder="Country..."
          required
        />
        <span>Height</span>
        <input
          type="number"
          onChange={(e) => handleOnChange(e)}
          value={data.height}
          id="height"
          placeholder="Centimeters..."
          required
        />
        <span>Weight</span>
        <input
          type="number"
          onChange={(e) => handleOnChange(e)}
          value={data.weight}
          id="weight"
          placeholder="Kilograms..."
          required
        />
        <span>Life Span</span>
        <input
          type="number"
          onChange={(e) => handleOnChange(e)}
          value={data.lifeSpan}
          id="lifeSpan"
          placeholder="Years..."
          required
        />
        <span>Temperament(s)</span>
        <input
          type="text"
          onChange={(e) => handleOnChange(e)}
          value={data.temperament}
          id="temperament"
          placeholder="Example: Loyal, playful"
          required
        />
        <button type="submit" className={styles.botoncito}>
          Send
        </button>
      </form>
    </div>
  );
};
