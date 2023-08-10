import { createApi } from '@reduxjs/toolkit/query/react'
import { publicQuery } from './authApi'

export const selectionsApi = createApi({
  reducerPath: 'selections',
  baseQuery: publicQuery,
  endpoints: (build) => ({
    getSelection: build.query({
      query: (id) => ({
        url: `catalog/selection/${id}/`,
        method: 'GET'
      }),
      transformResponse: ({ items }) => items
    })
  })
})

export const { useGetSelectionQuery } = selectionsApi