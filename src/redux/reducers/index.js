import { combineReducers } from "redux";
import postReducer from "./postReducers";
import selectedPostReducer from "./selectedPostReducer";

export const reducers = combineReducers({
  allPosts: postReducer,
  selectedPost: selectedPostReducer
});