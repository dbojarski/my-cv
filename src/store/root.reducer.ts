import { combineReducers } from '@reduxjs/toolkit';

import { userSlice, UserSliceState } from './user/user.reducer';

export type RootReducerState = {
  user: UserSliceState;
};

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
