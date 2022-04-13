import { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../common/interfaces';

export const SET_USER = 'user/setUser';

export function setUser(user: User): PayloadAction<User> {
  return { type: SET_USER, payload: user };
}
