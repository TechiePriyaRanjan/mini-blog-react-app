import { ActionTypes } from "../constants"

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts
  }
}

export const selectedPost = (post) => {
  return {
    type: ActionTypes.SELECTED_POST,
    payload: post
  }
}

export const userDetails = (user) => {
  return {
    type: ActionTypes.GET_USER_DETAILS,
    payload: user
  }
}