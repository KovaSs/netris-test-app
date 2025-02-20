import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from "./rootReducer";
import { rootSaga } from './rootSaga';

const configureAppStore = (initialState = {}) => {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middleware = [sagaMiddleware];

  const store = configureStore({
    middleware: (gDM) => gDM().concat([...middleware]),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    reducer: rootReducer,
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureAppStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;