import { useEffect } from "react";
import gif from "./loading.gif";
import style from "./index.module.css";
import Swal from "sweetalert2";

let flag = true;
export const Loading = () => {
  useEffect(() => {
    let check = document.getElementById("alpha");
    if (check) {
      if (flag) {
        flag = false;
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Fetcing dogs information...",
          showConfirmButton: false,
          timer: 699,
        });

        setTimeout(function () {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "Loading dogs cards...",
            showConfirmButton: false,
            timer: 1200,
          });
        }, 800);
      }
    }
  });

  return (
    <div className={style.imgWrapper} id="alpha">
      <img src={gif} alt="" className={style.imgFixer} id="loading" />
    </div>
  );
};
