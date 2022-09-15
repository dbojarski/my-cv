import { all, call } from 'redux-saga/effects';

import { experienceSaga } from './sagas/experience.saga';
import { personalInformationSaga } from './sagas/personal-information.saga';
import { skillsSaga } from './sagas/skills.saga';

export function* profileSaga() {
  yield all([
    call(personalInformationSaga),
    call(skillsSaga),
    call(experienceSaga),
  ]);
}
