import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: 'UAH',

  reducers: {
    setCurrency(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export const getCurrency = state => state.currency;
