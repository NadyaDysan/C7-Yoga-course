import { createApi } from '@reduxjs/toolkit/query/react'
import { publicQuery } from './BASE_URL'

export const tracksApi = createApi({
  reducerPath: 'tracks',
  baseQuery: publicQuery,
  endpoints: (build) => ({
    getTracks: build.query({
      query: () => ({
        url: 'catalog/track/all/',
        method: 'GET'
      })
    })
  })
})

export const { useGetTracksQuery } = tracksApi