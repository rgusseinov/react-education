import { ADD, MIN } from "./types";

export function addCount(value){
  return {
    type: ADD,
    payload: value
  }
}

export function minCount(value){
  return {
    type: MIN,
    payload: value
  }
}
