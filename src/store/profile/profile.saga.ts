import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { addDocument, getDocument } from '../../utils/firebase/firestore';
import { PersonalInformation, setError, setPersonalInformation } from './';

//fetch personal information
function* fetchPersonalInformation({ payload }: PayloadAction<string>): any {
  try {
    const response = yield call(getDocument, 'posts', payload);

    yield put(setPersonalInformation(response));
  } catch (error) {
    put(setError(error));
  }
}

function* onFetchPersonalInformation() {
  yield takeLatest(
    'profile/fetchPersonalInformation',
    fetchPersonalInformation
  );
}

//update personal information
function* updatePersonalInformation({
  payload,
}: PayloadAction<PersonalInformation & { id: string }>) {
  try {
    const { id, ...personalInformation } = payload;

    yield call(addDocument, 'posts', personalInformation, id);
  } catch (error) {
    put(setError(error));
  }
}
function* onSetPersonalInformation() {
  yield takeLatest('profile/setPersonalInformation', updatePersonalInformation);
}

export function* profileSaga() {
  yield all([call(onSetPersonalInformation), call(onFetchPersonalInformation)]);
}
