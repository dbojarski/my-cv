import { RootReducerState } from '../root.reducer';

export const selectUser = (state: RootReducerState) => state.user.data;
