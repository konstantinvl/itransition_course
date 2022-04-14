import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import {
  User,
  UserListOperationsReqestInterface,
} from '../../../common/interfaces';
import {
  blockUsers,
  deleteUsers,
  getUserById,
  getUserList,
  unblockUsers,
} from '../../axios/requests';
import { setUser } from '../user/userActions';
import { setUserList } from './userListActions';

const UserInitialState: User = {
  id: 0,
  login: '',
  blocked: true,
};

export function* usersDelete(
  action: PayloadAction<UserListOperationsReqestInterface>
) {
  const { selectedId, userId } = action.payload;
  try {
    const user: User = yield call(getUserById, userId);

    if (!user || user.blocked) {
      yield put(setUser(UserInitialState));
    } else {
      yield call(deleteUsers, selectedId);

      const userlist: User[] = yield call(getUserList);

      const updatedUser: User = yield call(getUserById, userId);

      if (!updatedUser || updatedUser.blocked) {
        yield put(setUser(UserInitialState));
      } else {
        yield put(setUserList(userlist));
      }
    }
  } catch (e) {
    yield console.log((e as Error).message);
  }
}

export function* usersUnblock(
  action: PayloadAction<UserListOperationsReqestInterface>
) {
  const { selectedId, userId } = action.payload;
  try {
    const user: User = yield call(getUserById, userId);
    if (!user || user.blocked) {
      yield put(setUser(UserInitialState));
    } else {
      yield call(unblockUsers, selectedId);
      const userlist: User[] = yield call(getUserList);

      const updatedUser: User = yield call(getUserById, userId);

      if (!updatedUser || updatedUser.blocked) {
        yield put(setUser(UserInitialState));
      } else {
        yield put(setUserList(userlist));
      }
    }
  } catch (e) {
    yield console.log((e as Error).message);
  }
}
export function* usersBlock(
  action: PayloadAction<UserListOperationsReqestInterface>
) {
  const { selectedId, userId } = action.payload;
  try {
    const user: User = yield call(getUserById, userId);
    if (!user || user.blocked) {
      yield put(setUser(UserInitialState));
    } else {
      yield call(blockUsers, selectedId);
      const userlist: User[] = yield call(getUserList);

      const updatedUser: User = yield call(getUserById, userId);

      if (!updatedUser || updatedUser.blocked) {
        yield put(setUser(UserInitialState));
      } else {
        yield put(setUserList(userlist));
      }
    }
  } catch (e) {
    yield console.log((e as Error).message);
  }
}
