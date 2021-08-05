import { ADD } from "./types"

const initialState = {
  count: 0
}

export const countReducer = (state = initialState, action ) => {
  switch (action.type){
    case ADD:
      return {...state, count: state.count}
    default: return state
  }
}
