import { PayloadAction } from '@reduxjs/toolkit';
import { AuthUserInterface, User } from '../../../common/interfaces';

export const SET_USER = 'user/setUser';
export const REQUEST_LOGIN_USER = 'user/requestLogin';
export const REQUEST_SIGNUP_USER = 'user/requestSignin';

export function setUser(user: User): PayloadAction<User> {
  return { type: SET_USER, payload: user };
}

export function requestLoginUser(
  user: AuthUserInterface
): PayloadAction<AuthUserInterface> {
  return { type: REQUEST_LOGIN_USER, payload: user };
}

export function requestSignInUser(
  user: AuthUserInterface
): PayloadAction<AuthUserInterface> {
  return { type: REQUEST_SIGNUP_USER, payload: user };
}
