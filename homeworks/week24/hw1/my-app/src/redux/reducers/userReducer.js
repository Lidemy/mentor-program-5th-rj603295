import { createSlice } from '@reduxjs/toolkit';
import { setAuthToken } from '../../utils'
import {
  getMe as getAPIMe,
  login as loginAPI,
  register as registerAPI
} from '../../WebAPI'


export const userReducer = createSlice({
  name: 'user',
  initialState: {
    user: null,
    errorMessage: ''
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    }
  },
});

export const { setUser, setErrorMessage } = userReducer.actions;

export const getMe = () => dispatch => {
  getAPIMe().then((res) => {
    if (res.ok) {
      dispatch(setUser(res.data))
    }   
  })
}

export const login = (username, password, history) => dispatch => {

  loginAPI(username, password, history).then((data) => {
    if (data.ok === 0) {
      return dispatch(setErrorMessage(data.message))
    }
    setAuthToken(data.token)
    getAPIMe().then((response) => {
      // const history = useHistory()
      if (response.ok !== 1) {
        setAuthToken(null)
        return dispatch(setErrorMessage(response.toString()))
      }
      dispatch(setUser(response.data))
      history.push('/')
    })
  })
}
export const register = (username, password, nickname, history) => dispatch => {
  registerAPI(username, password, nickname, history).then((data) => {
    if (data.ok === 0) {
      return dispatch(setErrorMessage(data.message))
    }
    setAuthToken(data.token)
    getAPIMe().then((response) => {
      if (response.ok !== 1) {
        setAuthToken(null)
        return dispatch(setErrorMessage(response.toString()))
      }
      dispatch(setUser(response.data))
      history.push('/')
    })
  })
}

export default userReducer.reducer;

