/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { userApi } from '../api/userApi'

const initialState = {
  access: '',
  isLoggedIn: false,
  errors: []
}

export const storeRefresh = (refresh) => {
    localStorage.setItem('refresh', refresh)
  }
  
export const deleteRefresh = () => {
    localStorage.removeItem('refresh')
  }
  
export const getRefresh = () => localStorage.getItem('refresh') || ''

export const isRefreshExists = () => Boolean(getRefresh())


const storeTokens = (state, { payload }) => {
  const { access, refresh } = payload
  if (!access) {
    return
  }
  state.access = access
  state.isLoggedIn = true
  if (refresh) storeRefresh(refresh)
}

const storeErrors = (state, { payload }) => {
  const { data } = payload
  state.errors = []
  Object.keys(data).forEach((error) => {
    const messages = data[error]
    state.errors.push(
      ...messages.map((message) => ({
        error,
        message,
        isHidden: false
      }))
    )
  })
  for (let i = 0; i < state.errors.length; i++) {
    state.errors[i].id = i
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.access = initialState.access
      state.isLoggedIn = initialState.isLoggedIn
      state.errors = initialState.errors
      deleteRefresh()
    },
    tokenReceived: (state, { payload }) => {
      const { access, refresh } = payload
      if (access) state.access = access
      if (refresh) storeRefresh(refresh)
    },
    hideError: (state, { payload }) => {
      const { id } = payload
      if (isNaN(id) || id < 0 || id >= state.errors.length) return
      state.errors[id].isHidden = true
    },
    addError: (state, { payload }) => {
      const { error, message, unique } = payload
      const index = state.errors.findIndex((e) => e.unique && e.unique === unique)
      if (index >= 0) {
        state.errors[index] = { ...state.errors[index], isHidden: false }
        return
      }
      state.errors.push({
        id: state.errors.length,
        error,
        message,
        unique,
        isHidden: false
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.token.matchFulfilled, storeTokens)
      .addMatcher(userApi.endpoints.refresh.matchFulfilled, storeTokens)
      .addMatcher(userApi.endpoints.signup.matchRejected, storeErrors)
      .addMatcher(userApi.endpoints.login.matchRejected, storeErrors)
  }
})

export const { logOut, tokenReceived, hideError, addError } = authSlice.actions
export default authSlice.reducer