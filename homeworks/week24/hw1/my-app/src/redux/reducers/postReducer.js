//import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  getArticle,
  createPost,
  getPosts as getAPIPosts,
  getMe as getAPIMe,
  deleteArticle,
  editArticle
} from '../../WebAPI'

export const postReducer = createSlice({
  name: 'posts',
  initialState: {
    user: null,
    isLoadingPost: false,
    post: null,
    newPostResponse: null,
    posts: [],
    amount: 0
  },
  reducers: {
    setIsLoadingPost: (state, action) => {
      state.isLoadingPost = action.payload
    },
    setPost: (state, action) => {
      state.post = action.payload
    },
    setNewPostResponse: (state, action) => {
      state.newPostResponse = action.payload
    },
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    setAmount: (state, action) => {
      state.amount = action.payload
    },
    setAuth: (state, action) => {
      state.user = action.payload
    },
  },
});

export const { setIsLoadingPost, setPost, setNewPostResponse, setPosts, setAmount, setAuth } = postReducer.actions;

export const getPost = (id) => (dispatch) => {
  dispatch(setIsLoadingPost(true))
  getArticle(id).then(res => {
    console.log(res)
    dispatch(setPost(res))
    dispatch(setIsLoadingPost(false))
  })
}
export const newPost = data => dispatch => {
  createPost(data).then((res) => {
    dispatch(setNewPostResponse(res))
  }).catch(err => console.log(err))
}

export const getPosts = data => dispatch => {
  getAPIPosts(data)
  .then((posts) => {
    dispatch(setAmount(posts.amount))
    return posts.res
  }).then((res) => {
    dispatch(setPosts(res))
  }).catch((err) => console.log(err))
}

export const getMe = () => dispatch => {
  getAPIMe().then((res) => {
    if (res.ok) {
      dispatch(setAuth(res.data))
    }   
  })
}
export const deletePost = (id, page) => dispatch => {
  deleteArticle(id).then(() => {
    getAPIPosts(page)
      .then(
        (posts) => {
          dispatch(setAmount(posts.amount))
          return posts.res
        }
      ).then(
        (posts) => dispatch(setPosts(posts))
      )
  })
}
export const editPost = (id, data) => dispatch => {
  editArticle(id, data).then(() => {
    dispatch(getPost(id))
  })
}

export default postReducer.reducer;

