import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../common/interfaces';

const initialState: User = {
  id: '',
  login: '',
  blocked: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return { ...action.payload };
    },
  },
});

export default userSlice.reducer;
