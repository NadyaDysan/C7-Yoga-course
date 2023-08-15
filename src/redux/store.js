import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './api/userApi'
import authReducer from './features/authSlice'
import { tracksApi } from './api/tracks'
import { favoritesApi } from './api/favorites'
import { selectionsApi } from './api/selections'

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [selectionsApi.reducerPath]: selectionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(userApi.middleware)
    .concat(tracksApi.middleware)
    .concat(favoritesApi.middleware)
    .concat(selectionsApi.middleware)
})

const baseAuthSelector = () => store.auth
export const isLoggedInSelector = () => baseAuthSelector.isLoggedIn
export const authErrorsSelector = () => baseAuthSelector.errors