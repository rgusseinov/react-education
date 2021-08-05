import { ADD, MIN } from "./types"

export const counterReducer = (state = 0, action ) => {
  switch (action.type){
    case ADD:
      return state + 1
    case MIN:
      return state - 1
    default: return state
  }
}
