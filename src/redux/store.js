import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './api/userApi'
import authReducer from './features/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

const baseAuthSelector = () => store.auth
export const isLoggedInSelector = () => baseAuthSelector.isLoggedIn
export const authErrorsSelector = () => baseAuthSelector.errors