import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getDocument, setDocument } from '../../../utils/firebase/firestore';
import {
  PersonalInformation,
  setError,
  setPersonalInformation,
} from '../profile.reducer';

function* fetchPersonalInformation({
  payload: uid,
}: PayloadAction<string>): any {
  try {
    const response = yield call(getDocument, 'profile', uid);

    yield put(setPersonalInformation({ ...response, uid }));
  } catch (error) {
    yield put(setError(error));
  }
}

function* onFetchPersonalInformation() {
  yield takeLatest(
    'profile/fetchPersonalInformation',
    fetchPersonalInformation
  );
}

function* updatePersonalInformation({
  payload,
}: PayloadAction<PersonalInformation & { uid: string }>) {
  try {
    const { uid, ...personalInformation } = payload;

    yield call(setDocument, 'profile', personalInformation, [uid]);
  } catch (error) {
    yield put(setError(error));
  }
}

function* onSetPersonalInformation() {
  yield takeLatest('profile/setPersonalInformation', updatePersonalInformation);
}

export function* personalInformationSaga() {
  yield all([call(onSetPersonalInformation), call(onFetchPersonalInformation)]);
}
