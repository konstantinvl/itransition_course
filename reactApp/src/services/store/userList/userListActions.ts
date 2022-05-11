import { Action, PayloadAction } from '@reduxjs/toolkit';
import {
  User,
  UserListOperationsReqestInterface,
} from '../../../common/interfaces';

export const SET_USERLIST = 'userlist/setUserList';
export const REQUEST_USERLIST = 'userlist/requestUserList';
export const REQUEST_DELETING = 'userlist/requestDeleting';
export const REQUEST_BLOCKING = 'userlist/requestBlocking';
export const REQUEST_UNBLOCKING = 'userlist/requestUnBlocking';

export function setUserList(userlist: User[]): PayloadAction<User[]> {
  return { type: SET_USERLIST, payload: userlist };
}

export function requestUserList(): Action {
  return { type: REQUEST_USERLIST };
}

export function requestDeleting(
  operationReqest: UserListOperationsReqestInterface
): PayloadAction<UserListOperationsReqestInterface> {
  return { type: REQUEST_DELETING, payload: operationReqest };
}

export function requestBlocking(
  operationReqest: UserListOperationsReqestInterface
): PayloadAction<UserListOperationsReqestInterface> {
  return { type: REQUEST_BLOCKING, payload: operationReqest };
}

export function requestUnblocking(
  operationReqest: UserListOperationsReqestInterface
): PayloadAction<UserListOperationsReqestInterface> {
  return { type: REQUEST_UNBLOCKING, payload: operationReqest };
}
