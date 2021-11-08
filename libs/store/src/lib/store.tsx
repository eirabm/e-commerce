import { configureStore } from '@reduxjs/toolkit';
import pokeApi from './pokeApi';
import shoppingCart from './shopping-cart.slice';

export const store = configureStore({
  reducer: {
    pokeApi,
    shoppingCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
