// import axios from "axios";
// import DOGS from "../../consts.js";

export function checker(e, flag) {
  if (e["target"][0]["value"] === "") {
    alert("You magician, the Name field is required!");
    return (flag = true);
  }
  if (e["target"][1]["value"] === "") {
    alert("You magician, the Origin field is required!");
    return (flag = true);
  }
  if (e["target"][2]["value"] === "") {
    alert("You magician, the Height field is required!");
    return (flag = true);
  }
  if (e["target"][3]["value"] === "") {
    alert("You magician, the Weight field is required!");
    return (flag = true);
  }
  if (e["target"][4]["value"] === "") {
    alert("You magician, the Life Span field is required!");
    return (flag = true);
  }
  if (e["target"][5]["value"] === "") {
    alert("You magician, the Temperament field is required!");
    return (flag = true);
  }
}

export function reset() {
  return {
    name: "",
    origin: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperament: "",
  };
}
