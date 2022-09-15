import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  deleteDocument,
  getDocuments,
  setDocument,
} from '../../../utils/firebase/firestore';
import {
  fetchSkills as fetchSkillsFromReducer,
  setError,
  setSkills,
  Skill,
} from '../profile.reducer';

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

export function* skillsSaga() {
  yield all([
    call(onSaveSkill),
    call(onFetchSkills),
    call(onDeleteSkill),
    call(onEditSkill),
  ]);
}
