import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './reducers';

let store;

const initStore = (preloadedState) => {
  return configureStore({
    reducer: reducers,
    preloadedState
  });
}

export const initializeStore = preloadedState => {
  store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
  }

  return store;
}

export const useStore = (initialState) => {
  return initializeStore(initialState);
}