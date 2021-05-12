import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import SearchResult from "../SearchResult";
import * as helper from "./helper.js";
import Swal from "sweetalert2";

export default function SearchBar() {
  //Cargamos en variables, desde el estado, los datos necesarios para los filtros
  const optionTemperaments = useSelector(
    (state) => state.temperaments
  ).map((x) => ({ value: x.id, label: x.name }));
  const optionBreeds = useSelector((state) =>
    state.apiDogs
      .concat(state.customDogs)
      .map((x) => ({ value: x.name, label: x.name }))
  );

  //Se coloca "Nothing" como opcion al principio del arreglo
  optionBreeds.unshift(helper.noSelection);
  optionTemperaments.unshift(helper.noSelection);

  //Opciones para ordenamiento
  const optionWeights = [
    helper.noSelection,
    helper.ascending,
    helper.descending,
  ];
  const optionABC = [helper.noSelection, helper.ascending, helper.descending];
  const optionSort = [helper.weight, helper.abc];

  //estados del input
  const [breed, setBreed] = useState({
    value: 0,
    label: "Nothing",
  });
  const [weight, setWeight] = useState({
    value: 0,
    label: "Nothing",
  });
  const [abc, setABC] = useState({
    value: 0,
    label: "Nothing",
  });
  const [tempers, setTempers] = useState({
    value: 0,
    label: "Nothing",
  });
  const [sort, setSort] = useState([
    {
      value: 0,
      label: "Nothing",
    },
  ]);

  //Estados para el control de ordenamientos y filtro
  const [filterActivated, setFilter] = useState(false);
  const [data, setData] = useState("");
  const [orderW, setOrderW] = useState("");
  const [orderABC, setOrderABC] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    flag = helper.checker(breed, weight, tempers, abc); //Se revisa que los inputs no ka-boom la app entera
    if (!flag) {
      //Si esta todo bien, procede a mostrar la información segun el input
      setFilter(true);
      setOrderW(weight);
      setOrderABC(abc);
      if (breed.label !== "Nothing") setData(breed);
      else if (tempers.label !== "Nothing") setData(tempers);
    }
  }
  function reset() {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "Resetting fields...",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(function(){window.location.reload();}, 1002)
  }
  function toState(e) {
    const newData = { value: e.target.value, label: e.target.value };
    setBreed(newData);
  }

  //flags controladores del flujo logico del componente y disponibilidad de inputs
  let flag = false;
  let temperFlag = true;
  let breedFlag = true;
  let orderFlag = true;
  let wOrAbc = "W";

  //Un buen if hell para controlar qué inputs se pueden usar y cualques no
  if (tempers.length !== 0) {
    if (tempers["label"] !== "Nothing") {
      temperFlag = false;
    }
  }
  if (tempers.length === 0) {
    temperFlag = true;
  }
  if (breed.length !== 0) {
    if (breed.label !== "Nothing") {
      breedFlag = false;
    }
  }
  if (sort.value === "W") {
    orderFlag = false;
  }
  if (sort.value === "A") {
    orderFlag = false;
    wOrAbc = "A";
  }

  //Renderización del componente, lineas 108-150 y 158-170 controlan el acceso a los inputs.
  //Linea 176 renderiza el componente que procesa el input
  return (
    <div className={styles.enNavi}>
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        {/*start byTemperament component*/}
        <div className={styles.input}>
          <p className={styles.center}>
            Or maybe you are looking for a specific breed...
          </p>
        </div>
        <div className={styles.center}>
          {temperFlag ? (
            <input
              onChange={(e) => toState(e)}
              className={styles.inputBox2}
              id="inputFeo"
              placeholder="Write dog breed's name"
            />
          ) : (
            <input
              readOnly
              className={styles.inputBox2}
              placeholder="Not allowed if searching by temperaments"
            />
          )}
        </div>
        {/*End byTemperament component*/
        /*Start byBreed component*/}
        <div className={styles.input}>
          {breedFlag ? (
            <>
              <Select
                options={optionTemperaments}
                onChange={setTempers}
                className={styles.inputBox}
                placeholder="Select temperament"
                autoFocus
                components={makeAnimated()}
              />
              <Select
                options={optionSort}
                onChange={setSort}
                className={styles.inputBox}
                placeholder="Choose sort method"
                components={makeAnimated()}
              />
              {orderFlag ? (
                <></>
              ) : (
                <>
                  {wOrAbc === "W" ? (
                    <>
                      {" "}
                      <Select
                        options={optionWeights}
                        onChange={setWeight}
                        className={styles.inputBox}
                        placeholder="Sort by weight"
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <Select
                        options={optionABC}
                        onChange={setABC}
                        className={styles.inputBox}
                        placeholder="Sort by alphabet"
                      />
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <Select
                className={styles.inputBox2}
                placeholder="Not allowed if searching by breed"
                isMulti
                autoFocus
                components={makeAnimated()}
              />
              <Select
                className={styles.inputBox2}
                placeholder="Not allowed if searching by breed"
              />
            </>
          )}
        </div>
        {/*End byBreed component*/}
        <button type="submit" className={styles.busqueda}>
          Search
        </button>
        <button onClick={reset} className={styles.busqueda}>
          Reset fields
        </button>
      </form>
      {filterActivated ? (
        <SearchResult data={data} orderW={orderW} orderABC={orderABC} />
      ) : null}
    </div>
  );
}
