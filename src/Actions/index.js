import * as actions from "./actionTypes";

export const addDog = (payload) => ({
  type: actions.ADD,
  payload,
});

export const getMatchingTemps = (payload) => ({
  type: actions.FILTER_TEMP,
  payload,
});

export const getDogs = (payload) => {
  return {
    type: actions.MAIN,
    payload,
  };
};

export const getDogDetail = (payload) => {
  return {
    type: actions.DETAIL,
    payload,
  };
};

export const getTemperaments = (payload) => ({
  type: actions.TEMPERAMENTS,
  payload,
});
