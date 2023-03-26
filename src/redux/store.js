import { configureStore } from '@reduxjs/toolkit';

import { exchangesApi } from './contactsApi';
import { currencySlice } from './currencySlice';

export const store = configureStore({
  reducer: {
    [exchangesApi.reducerPath]: exchangesApi.reducer,
    currency: currencySlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(exchangesApi.middleware),
});
