import { call, put, takeLatest } from 'redux-saga/effects';

import { signInWithGoogle } from '../../utils/firebase/auth';
import { setUser, signInError } from './user.reducer';

function* signIn() {
  try {
    const { user } = yield call(signInWithGoogle);

    yield put(setUser(user));
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* userSaga() {
  yield takeLatest('user/signInStart', signIn);
}
