import { PayloadAction } from '@reduxjs/toolkit';

import { call, put } from 'redux-saga/effects';
import { ItemInterface, ItemCreateInterface } from '../../../common/interfaces';
import {
  changeItem,
  deleteItem,
  getItems,
  likeItem,
  newItem,
} from '../../axios/requests';
import {
  notificationSendError,
  notificationSendSuccess,
} from '../notification/notificationActions';

import { requestItems, setItems } from './itemsActions';

export function* itemsGet() {
  try {
    const items: ItemInterface[] = yield call(getItems);

    yield put(setItems(items));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}

export function* itemSet(action: PayloadAction<ItemCreateInterface>) {
  try {
    yield call(newItem, action.payload);
    yield put(requestItems());
    yield put(notificationSendSuccess('itemAdded'));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}

export function* itemChange(action: PayloadAction<ItemInterface>) {
  try {
    yield call(changeItem, action.payload);
    yield put(requestItems());
    yield put(notificationSendSuccess('changeSuccesful'));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}

export function* itemDelete(action: PayloadAction<number>) {
  try {
    yield call(deleteItem, action.payload);
    yield put(requestItems());
    yield put(notificationSendSuccess('itemDeleted'));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}

export function* itemLike(
  action: PayloadAction<{ itemId: number; userId: number }>
) {
  try {
    yield call(likeItem, action.payload);
    yield put(requestItems());
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}
