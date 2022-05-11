import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserList } from '../../../common/interfaces';
import { RootState } from '../store';

const initialState: UserList = {
  userlist: [],
};

export const userListSlice = createSlice({
  name: 'userlist',
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<User[]>) => {
      return { userlist: action.payload };
    },
  },
});

export const getUserlistState = (state: RootState): UserList => state.userList;
export const selectUserByID = createSelector(
  [getUserlistState, (state, id: number) => id],
  (state, id) => state.userlist.find((user) => user.id === id)
);

export default userListSlice.reducer;
