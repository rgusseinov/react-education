import { ADD, ADD_POST, MIN } from "./types";

export function increment(){
  return {
    type: ADD
  }
}

export function decrement(){
  return {
    type: MIN
  }
}

export function addPost(title){
  return {
    type: ADD_POST,
    payload: title
  }
}
