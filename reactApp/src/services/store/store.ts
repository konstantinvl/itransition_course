import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import collectionReduser from './collections/colectionsReduser';
import commentsReduser from './comments/commentsReduser';
import itemsReduser from './items/itemsReduser';
import notificationReduser from './notification/notificationReduser';
import mySaga from './sagas';
import tagsReducer from './tags/tagsReducer';
import userReduser from './user/userReduser';
import userListReduser from './userList/userListReduser';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    userList: userListReduser,
    user: userReduser,
    items: itemsReduser,
    collections: collectionReduser,
    tags: tagsReducer,
    comments: commentsReduser,
    notification: notificationReduser,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
