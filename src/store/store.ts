import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root.reducer';
import { rootSaga } from './root.saga';

const sagaMiddleware = createSagaMiddleware();
const middleWareEnhancer = applyMiddleware(sagaMiddleware, logger);
const store = createStore(rootReducer, middleWareEnhancer);

sagaMiddleware.run(rootSaga);

export default store;
