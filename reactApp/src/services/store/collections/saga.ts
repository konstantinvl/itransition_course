import { PayloadAction } from '@reduxjs/toolkit';

import { call, put } from 'redux-saga/effects';
import {
  CollectionCreateInterface,
  CollectionInterface,
} from '../../../common/interfaces';
import {
  changeCollection,
  getCollections,
  newCollection,
} from '../../axios/requests';
import { requestCollections, setCollections } from './collectionsActions';

export function* collectionsGet() {
  try {
    const collections: CollectionInterface[] = yield call(getCollections);

    yield put(setCollections(collections));
  } catch (e) {
    yield console.log((e as Error).message);
  }
}

export function* collectionSet(
  action: PayloadAction<CollectionCreateInterface>
) {
  try {
    console.log(action.payload);
    yield call(newCollection, action.payload);
    yield put(requestCollections());
  } catch (e) {
    yield console.log((e as Error).message);
  }
}

export function* collectionChange(action: PayloadAction<CollectionInterface>) {
  try {
    console.log(action.payload);
    yield call(changeCollection, action.payload);
    yield put(requestCollections());
  } catch (e) {
    yield console.log((e as Error).message);
  }
}
