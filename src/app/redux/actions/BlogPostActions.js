import { GET_BLOG_POST_LIST, GET_BLOG_POST_LIST_BY_CATEGORY } from "./actionNames";
import axios from "axios"; 

const url = 'https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts';

export const addBlogPost = (payload) => (dispatch) => {
  axios.post(url, payload )
    .then(res => {
      if(res.status !== 201) return;
      dispatch(getBlogPostList());
  })
    .catch( err => console.log(err))
  }

export const getBlogPostList = () => dispatch => {
  axios.get(url).then(res => {    
    dispatch({
      type: GET_BLOG_POST_LIST,
      payload: res.data.resultData
    });
  })
  .then(data => console.log(data))
  .catch( err => console.log(err));
};

export const getBlogPostListByCategory = (categoryId) => dispatch => {
  axios.get(`${url}/GetPostByCategory?categoryId=${categoryId}`)
    .then(res => {    
      dispatch({
        type: GET_BLOG_POST_LIST_BY_CATEGORY,
        payload: res.data.resultData
      });
    })
    .catch( err => console.log(err));
};

export const deleteBlogPost = (id) => dispatch => {
  axios({
    method: 'delete',
    url: `${url}/${id}`,    
  })
  .then(res => {
    if(res.status !== 204) return;
    dispatch(getBlogPostList());
  })
  .catch( err => console.log(err));
};

export const putBlogPost = (payload) => dispatch => {
  axios({
    method: 'put',
    url: `${url}/${payload.id}`,
    data: payload    
  })
  .then(res => {        
    dispatch(getBlogPostList());
  })
  .catch( err => console.log(err))
};