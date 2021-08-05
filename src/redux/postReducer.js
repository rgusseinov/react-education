import { ADD_POST } from "./types";

export const postReducer = (state = [], action) => {
  switch (action.type){
    case ADD_POST:
      return state.concat(action.payload)
    default: return state
  }
}
