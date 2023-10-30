import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const BASE_URL = 'https://skypro-music-api.skyeng.tech/';

export const publicQuery = fetchBaseQuery({ baseUrl: BASE_URL });
