import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { Loading } from "../Loading";
import { Link } from "react-router-dom";
import { DOGS, MY_DOGS } from "../../consts.js";
import styles from "./index.module.css";

export default function Dogs() {
  //Imagen para los perros custom
  const dogoArgentino = "https://i.imgur.com/3NWxcVq.jpg";
  //Estados para el paginado
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  //Al realizar la carga de informacion se tiene un pequeño delay, no pude figurar
  //como traer información desde el estado y mostrar el gif de carga mientras
  //se espera a que aparezca la informacion
  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      const res1 = await axios.get("http://localhost:3001" + DOGS);
      const res2 = await axios.get("http://localhost:3001" + MY_DOGS);
      const res = res2["data"].concat(res1["data"]);
      setDogs(res);
      setLoading(false);
    };
    fetchAPI();
  }, []);

  const indexLast = currentPage * postsPerPage;
  const indexFirst = indexLast - postsPerPage;
  const currentDogs = dogs.slice(indexFirst, indexLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let dogsData = currentDogs.map((x) => {
    return (
      <Link to={DOGS + "/" + x.id} className={styles.dogBox} key={x.id} id={x.id}>
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
      </Link>
    );
  });
  return (
    <>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={dogs.length}
        paginate={paginate}
      />
      <div className={styles.app}>
        {loading ? <Loading /> : null}
        {dogsData}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={dogs.length}
        paginate={paginate}
      />
    </>
  );
}
