import { Mutex } from 'async-mutex'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { BASE_URL, publicQuery} from './BASE_URL'
import { logOut, tokenReceived } from '../features/authSlice'
import { getRefresh } from '../features/refresh'


const mutex = new Mutex()

const prepareHeaders = (headers, { getState }) => {
  const token = getState().auth.access
  if (token) headers.set('authorization', `Bearer ${token}`)
  return headers
}

export const fetchProtectedQuery = fetchBaseQuery({ baseUrl: BASE_URL, prepareHeaders })

export const protectedQuery = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let response = await fetchProtectedQuery(args, api, extraOptions)

  if (response.error === undefined || response.error.code !== 401) return response

  if (mutex.isLocked()) {
    await mutex.waitForUnlock()
    response = await fetchProtectedQuery(args, api, extraOptions)
    return response
  }

  const release = mutex.acquire()

  try {
    const tokens = await publicQuery(
      {
        url: 'token/refresh/',
        method: 'POST',
        body: { refresh: getRefresh() }
      },
      api,
      extraOptions
    )

    if (tokens.data) {
      api.dispatch(tokenReceived(tokens.data))
      response = await fetchProtectedQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  } finally {
    release()
  }

  return response
}