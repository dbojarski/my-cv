import { all, call } from 'redux-saga/effects';

import { profileSaga } from './profile/profile.saga';
import { userSaga } from './user/user.saga';

export function* rootSaga() {
  yield all([call(userSaga), call(profileSaga)]);
}
