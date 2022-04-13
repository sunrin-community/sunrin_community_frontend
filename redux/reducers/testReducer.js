import * as actionTypes from "../types";

const initialState = {
  name: "test",
}
const test = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return { ...state };
  }
};

export default test;