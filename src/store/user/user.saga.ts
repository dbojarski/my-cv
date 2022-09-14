import { all, call, put, takeLatest } from 'redux-saga/effects';

import { signInWithGoogle, signOutFromApp } from '../../utils/firebase/auth';
import { setPersonalInformation, setSkills } from '../profile';
import { setError, setUser } from './user.reducer';

// sign in saga
function* signIn() {
  try {
    const { user } = yield call(signInWithGoogle);

    yield put(setUser(user));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* onSignIn() {
  yield takeLatest('user/signInStart', signIn);
}

//sign out saga
export function* signOut() {
  try {
    yield call(signOutFromApp);
    yield put(setUser(null));
    yield put(setPersonalInformation(null));
    yield put(setSkills([]));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* onSignOut() {
  yield takeLatest('user/signOutStart', signOut);
}

export function* userSaga() {
  yield all([call(onSignIn), call(onSignOut)]);
}
