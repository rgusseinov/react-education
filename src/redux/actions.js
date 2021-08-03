import { CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, POST_COUNT, SHOW_ALERT, SHOW_LOADER } from "./types";

// Post
export function createPost(post){
  return {
    type: CREATE_POST,
    payload: post
  }
}

// Post count
export function postCount(post){
  return {
    type: POST_COUNT,
    payload: post
  }
}


// Loader
export function showLoader(){
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader(){
  return {
    type: HIDE_LOADER
  }
}

// Alert
export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
  })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert(){
  return {
    type: HIDE_ALERT
  }
}


export function fetchPosts(){
  return async dispatch => {
    try {
      dispatch(showLoader());
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const json = await response.json()    
      dispatch({ type: FETCH_POSTS, payload: json })
      dispatch(hideLoader())
    } catch(e) {
      dispatch(showAlert('Что-то пошло не так'))
      dispatch(hideLoader())
    }

  }
}
