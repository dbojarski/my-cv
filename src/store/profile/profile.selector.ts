import { RootReducerState } from '../root.reducer';

export const selectPersonalInformation = (state: RootReducerState) =>
  state.profile.personalInformation;

export const selectPending = (state: RootReducerState) => state.profile.pending;
