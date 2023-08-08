/* eslint-disable import/no-cycle */
import { createApi } from '@reduxjs/toolkit/query/react'
import { publicQuery } from './authApi'

export const TOKEN_TAG = 'Tokens'

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: publicQuery,
  tagTypes: [TOKEN_TAG],
  endpoints: (build) => ({
    signup: build.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body
      })
    }),
    login: build.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body
      })
    }),
    token: build.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body
      })
    }),
    refresh: build.mutation({
      query: (body) => ({
        url: 'user/token/refresh/',
        method: 'POST',
        body
      })
    })
  })
})

export const { useSignupMutation, useLoginMutation, useTokenMutation, useRefreshMutation } = userApi