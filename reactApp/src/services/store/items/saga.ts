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

import { requestItems, setItems } from './itemsActions';

export function* itemsGet() {
  try {
    const items: ItemInterface[] = yield call(getItems);

    yield put(setItems(items));
  } catch (e) {
    yield console.log((e as Error).message);
  }
}

export function* itemSet(action: PayloadAction<ItemCreateInterface>) {
  try {
    yield call(newItem, action.payload);
    yield put(requestItems());
  } catch (e) {
    yield console.log((e as Error).message);
  }
}

export function* itemChange(action: PayloadAction<ItemInterface>) {
  try {
    yield call(changeItem, action.payload);
    yield put(requestItems());
  } catch (e) {
    yield console.log((e as Error).message);
  }
}

export function* itemDelete(action: PayloadAction<number>) {
  try {
    yield call(deleteItem, action.payload);
    yield put(requestItems());
  } catch (e) {
    yield console.log((e as Error).message);
  }
}

export function* itemLike(
  action: PayloadAction<{ itemId: number; userId: number }>
) {
  try {
    yield call(likeItem, action.payload);
    yield put(requestItems());
  } catch (e) {
    yield console.log((e as Error).message);
  }
}
