import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserList } from '../../../common/interfaces';

const initialState: UserList = {
  userlist: [
    { id: '1', login: 'first', blocked: false },
    { id: '2', login: 'second', blocked: false },
    { id: '3', login: 'third', blocked: false },
  ],
};

export const userListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<UserList>) => {
      return { ...action.payload };
    },
  },
});

export default userListSlice.reducer;
