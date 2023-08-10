import { createApi } from '@reduxjs/toolkit/query/react'
import { protectedQuery } from './authApi'

const FAVORITE_TRACK_TAG = 'Favorite'

export const favoritesApi = createApi({
  reducerPath: 'favorites',
  baseQuery: protectedQuery,
  tagTypes: [FAVORITE_TRACK_TAG],
  endpoints: (build) => ({
    getFavorites: build.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
        method: 'GET'
      }),
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: FAVORITE_TRACK_TAG, id })) : []
    }),
    addFavorite: build.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST'
      }),
      invalidatesTags: [FAVORITE_TRACK_TAG]
    }),
    deleteFavorite: build.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE'
      }),
      invalidatesTags: [FAVORITE_TRACK_TAG]
    })
  })
})

export const { useGetFavoritesQuery, useAddFavoriteMutation, useDeleteFavoriteMutation } =
  favoritesApi