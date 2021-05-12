import { Link } from "react-router-dom";
import { sortZtoA } from "../helper.js";
const { TEMPERS } = require("../../../consts.js");

export const Desc = ({state}) => {
  let descending = sortZtoA(state);
  let desc = descending.map((x) => {
    return <div key={x.id}><Link to={`${TEMPERS}/${x.name}`}>{x.name}</Link></div>;
  });
  return <div>{desc}</div>;
};
