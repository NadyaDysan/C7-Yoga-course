import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const BASE_URL = 'https://painassasin.online/';

export const publicQuery = fetchBaseQuery({ baseUrl: BASE_URL });
