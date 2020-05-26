import { Type } from "../actions/actions";

const defaultState = "";

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Type.SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
