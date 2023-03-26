import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const API_ENDPOINT = '/latest';
const BASE_URL = 'https://api.apilayer.com/exchangerates_data/';

export const exchangesApi = createApi({
  reducerPath: 'exchange',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  // tagTypes: ['Contacts'],
  // endpoints: builder => ({
  //   fetchExchanges: builder.query({
  //     query: ({ symbols, base }) => `latest?symbols=${symbols}&base=${base}`,

  //     // providesTags: ['Contacts'],
  //   }),
  // }),
  endpoints: builder => ({
    fetchExchanges: builder.query({
      query: ({ symbols = '', base }) => ({
        url: `latest?${symbols}&base=${base}`,
        method: 'GET',
        headers: {
          apikey: 'zQIn97tCUkXPH6kQ7gbfgJSFBM4zl24y',
        },
      }),
    }),
  }),
});
export const { useFetchExchangesQuery } = exchangesApi;
