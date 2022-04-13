import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import userReduser from './user/userReduser';
import userListReduser from './userList/userListReduser';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { userList: userListReduser, user: userReduser },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
