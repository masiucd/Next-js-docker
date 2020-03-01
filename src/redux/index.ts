/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';


export type AppState = ReturnType<typeof rootReducer>


export const configureStore = () => {
  const logger = createLogger();
  const middleWares: Middleware[] = [];
  if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
  }
  if (process.env.NODE_ENV === 'production') {
    // middleWares.push(logger);
  }
  if (process.env.NODE_ENV === 'test') {
    middleWares.push(logger);
  }
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer),
  );
  return store;
};
