import { combineReducers } from '@reduxjs/toolkit';

import { profileSlice } from './profile';
import { userSlice } from './user';

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  profile: profileSlice.reducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;
