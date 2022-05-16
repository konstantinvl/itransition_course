import { PayloadAction } from '@reduxjs/toolkit';

import { call, put } from 'redux-saga/effects';
import { AuthUserInterface, User } from '../../../common/interfaces';
import { getUserList, login, newUser } from '../../axios/requests';
import {
  notificationSendError,
  notificationSendSuccess,
} from '../notification/notificationActions';
import { setUserList } from '../userList/userListActions';
import { setUser } from './userActions';

export function* loginUser(action: PayloadAction<AuthUserInterface>) {
  try {
    const user: User = yield call(login, action.payload);

    yield put(setUser(user));
    const userlist: User[] = yield call(getUserList);

    yield put(setUserList(userlist));
    yield put(notificationSendSuccess('loginSuccesful'));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}

export function* signupUser(action: PayloadAction<AuthUserInterface>) {
  try {
    yield call(newUser, action.payload);
    yield put(notificationSendSuccess('signInSuccesful'));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}
