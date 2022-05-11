import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import collectionReduser from './collections/colectionsReduser';
import itemsReduser from './items/itemsReduser';
import mySaga from './sagas';
import userReduser from './user/userReduser';
import userListReduser from './userList/userListReduser';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    userList: userListReduser,
    user: userReduser,
    items: itemsReduser,
    collections: collectionReduser,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
