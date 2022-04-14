import { ForkEffect, takeEvery } from 'redux-saga/effects';
import { loginUser, signupUser } from './user/saga';
import { REQUEST_LOGIN_USER, REQUEST_SIGNUP_USER } from './user/userActions';
import { usersBlock, usersDelete, usersUnblock } from './userList/saga';
import {
  REQUEST_BLOCKING,
  REQUEST_DELETING,
  REQUEST_UNBLOCKING,
} from './userList/userListActions';

function* mySaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(REQUEST_LOGIN_USER, loginUser);
  yield takeEvery(REQUEST_SIGNUP_USER, signupUser);
  yield takeEvery(REQUEST_DELETING, usersDelete);
  yield takeEvery(REQUEST_BLOCKING, usersBlock);
  yield takeEvery(REQUEST_UNBLOCKING, usersUnblock);
}

export default mySaga;
