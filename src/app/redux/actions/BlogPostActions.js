import { ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST, SEARCH_BLOG_POST } from "./actionNames"; 

export const addBlogPost = (payload) => {
  return {
      type: ADD_BLOG_POST,
      payload: payload
    } 
}

export const deleteBlogPost = (id) => {
  return {
      type: DELETE_BLOG_POST,
      id: id
    } 
}

export const editBlogPost = (payload) => {
  return {
      type: EDIT_BLOG_POST,
      payload: payload
    } 
}

export const searchBlogPost = (id) => {
  return {
      type: SEARCH_BLOG_POST,
      id: id
    } 
}