import { CREATE_POST, FETCH_POSTS, POST_COUNT } from "./types"

const initialState = {
  posts: [],
  fetchedPosts: [],
  postCount: 0
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type){
    case CREATE_POST:
        return { ...state, posts: state.posts.concat([action.payload]) }
    case FETCH_POSTS:
        return { ...state, fetchedPosts: action.payload }
    case POST_COUNT:
        return { ...state, postCount: state.posts.length }   
    default: return state
  }
}