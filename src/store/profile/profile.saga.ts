import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  setDocument,
  getDocument,
  getDocuments,
  deleteDocument,
} from '../../utils/firebase/firestore';
import {
  PersonalInformation,
  setError,
  setPersonalInformation,
  setSkills,
  Skill,
} from './';
import { fetchSkills as fetchSkillsFromReducer } from './profile.reducer';
import { experienceSaga } from './sagas/experience.saga';

//fetching all skills
function* fetchSkills({ payload }: PayloadAction<string>): any {
  try {
    const skills = yield call(getDocuments, 'profile', [payload, 'skills']);

    yield put(setSkills(skills));
  } catch (error) {
    yield put(setError(error));
  }
}

function* onFetchSkills() {
  yield takeLatest('profile/fetchSkills', fetchSkills);
}

//fetch personal information
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

//update personal information
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

// adding or editing a skill
function* saveSkill({ payload }: PayloadAction<Skill & { uid: string }>) {
  try {
    const { uid, ...skill } = payload;

    yield call(setDocument, 'profile', skill, [uid, 'skills', skill.name]);
    yield put(fetchSkillsFromReducer(uid));
  } catch (error) {
    yield put(setError(error));
  }
}

function* onSaveSkill() {
  yield takeLatest('profile/saveSkill', saveSkill);
}

//delete skill
function* deleteSkill({
  payload: { name, uid },
}: PayloadAction<{ name: string; uid: string }>) {
  try {
    yield call(deleteDocument, `profile`, [uid, 'skills', name]);
    yield put(fetchSkillsFromReducer(uid));
  } catch (error) {
    yield put(setError(error));
  }
}

function* onDeleteSkill() {
  yield takeLatest('profile/deleteSkill', deleteSkill);
}

//edit skill
function* editSkill({ payload }: PayloadAction<Skill & { uid: string }>) {
  try {
    const { uid, ...skill } = payload;

    yield call(setDocument, 'profile', skill, [uid, 'skills', skill.name]);
    yield put(fetchSkillsFromReducer(uid));
  } catch (error) {
    yield put(setError(error));
  }
}

function* onEditSkill() {
  yield takeLatest('profile/editSkill', editSkill);
}

export function* profileSaga() {
  yield all([
    call(onSetPersonalInformation),
    call(onFetchPersonalInformation),
    call(onSaveSkill),
    call(onFetchSkills),
    call(onDeleteSkill),
    call(onEditSkill),
    call(experienceSaga),
  ]);
}
