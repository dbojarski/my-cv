import { combineReducers } from '@reduxjs/toolkit';

import { userSlice } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;
