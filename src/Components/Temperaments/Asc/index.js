import { Link } from "react-router-dom";
import { sortAtoZ } from "../helper.js";
const { TEMPERS } = require("../../../consts.js");

export const Asc = ({state}) => {
  let ascending = sortAtoZ(state);
  let asc = ascending.map((x) => {
    return <div key={x.id}><Link to={`${TEMPERS}/${x.name}`}>{x.name}</Link></div>;
  });
  return <div>{asc}</div>;
};
