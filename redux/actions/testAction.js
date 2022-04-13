import * as actionTypes from "../types";

export const test = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.TEST, payload : {name: "변경"}})
  }
}