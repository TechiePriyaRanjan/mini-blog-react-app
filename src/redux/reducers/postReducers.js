import { ActionTypes } from "../constants";

const initialState = {
  posts: [],
  userInfo: {},
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };
    case ActionTypes.GET_USER_DETAILS:
      return { ...state, userInfo: payload };
    default:
      return state;
  }
  return state;
};
export default postReducer;
