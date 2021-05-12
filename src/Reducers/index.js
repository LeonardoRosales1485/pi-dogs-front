import * as actions from "../Actions/actionTypes";
import axios from "axios";
import Swal from "sweetalert2";
import { HOST, DOG, DOGS, MY_DOGS, TEMPERS } from "../consts.js";
import { addDog, getDogs, getTemperaments } from "../Actions";
// getTemperaments TEMPERS
const initialState = {
  customDogs: [],
  apiDogs: [],
  temperaments: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD:
      return {
        ...state,
        customDogs: state.customDogs.concat(action.payload),
      };
    case actions.MAIN:
      return {
        ...state,
        apiDogs: action.payload,
      };
    case actions.TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    default:
      return state;
  }
}

//Funciones asincronicas mediante thunk para interactuar con los estados, la API y la DB
export const loadData = () => async (dispatch, getState) => {
  const dogsInState = getState().customDogs;
  let lastPos = 0;
  if (dogsInState.length !== 0) {
    lastPos = dogsInState.length - 1;
  }
  let currentPos = dogsInState[lastPos];
  await axios
    .post(HOST + DOG, {
      name: currentPos.name,
      height: currentPos.height,
      weight: currentPos.weight,
      lifeSpan: currentPos.lifeSpan + " years",
      origin: currentPos.origin,
      temperament: currentPos.temperament,
    })
    .then((res) => {
      Swal.fire(
        "Successful creation",
        "Your dog breed has been added!",
        "success"
      );
      console.log(res.data);
    });
};

export const getDB = () => async (dispatch, getState) => {
  const data = await axios.get(HOST + MY_DOGS).then((res) => res.data);
  if (data.length === 0)
    return console.log("DB is empty! Nothing to synchronise");
  else {
    console.log("Redux state customDogs synchronised with DB");
    dispatch(addDog(data));
  }
};

export const getAPI = () => async (dispatch, getState) => {
  const data = await axios.get(HOST + DOGS).then((res) => res.data);
  console.log("Redux state apiDogs loaded");
  dispatch(getDogs(data));
};

export const getDBtemps = () => async (dispatch, getState) => {
  const data = await axios.get(HOST + TEMPERS).then((res) => res.data);
  if (data.length === 0)
    return console.log("DB is empty! Nothing to synchronise");
  else {
    console.log("Redux state temperaments synchronised with DB");
    dispatch(getTemperaments(data));
  }
};
