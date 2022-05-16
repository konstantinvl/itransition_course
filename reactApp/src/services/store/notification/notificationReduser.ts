/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationState } from '../../../common/interfaces';

const initialState: NotificationState = {
  type: '',
  message: '',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    sendNotification: (state, action: PayloadAction<NotificationState>) => {
      return { ...action.payload };
    },
  },
});

export default notificationSlice.reducer;
