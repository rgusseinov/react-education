import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postReducer
})
