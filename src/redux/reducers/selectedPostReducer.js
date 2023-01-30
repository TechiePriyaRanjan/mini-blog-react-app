import { ActionTypes } from "../constants";

const initialState = {
  selectedPost: {}
};

const selectedPostReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_POST:
      return { ...state, selectedPost: payload };
    default:
      return state;
  }
  return state;
};
export default selectedPostReducer;