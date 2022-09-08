import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from './root.reducer';

const middleWareEnhancer = applyMiddleware(logger);

export const store = createStore(rootReducer, middleWareEnhancer);
