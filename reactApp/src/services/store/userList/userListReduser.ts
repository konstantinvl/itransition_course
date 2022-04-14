import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserList } from '../../../common/interfaces';

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

export default userListSlice.reducer;
