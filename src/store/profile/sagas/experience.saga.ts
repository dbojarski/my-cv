import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { setDocument } from '../../../utils/firebase/firestore';
import { Experience, setError } from '../profile.reducer';

function* saveExperience({
  payload,
}: PayloadAction<Experience & { uid: string }>) {
  try {
    const { uid, ...experience } = payload;

    yield call(setDocument, 'profile', experience, [
      uid,
      'experiences',
      experience.title,
    ]);
  } catch (error) {
    yield put(setError(error));
  }
}

function* onSaveExperience() {
  yield takeLatest('profile/saveExperience', saveExperience);
}

export function* experienceSaga() {
  yield all([call(onSaveExperience)]);
}
