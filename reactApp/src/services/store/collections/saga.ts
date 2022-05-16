import { PayloadAction } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';

import { call, put } from 'redux-saga/effects';
import {
  CollectionCreateInterface,
  CollectionInterface,
} from '../../../common/interfaces';
import {
  changeCollection,
  deleteCollection,
  getCollections,
  newCollection,
} from '../../axios/requests';
import {
  notificationSendError,
  notificationSendSuccess,
} from '../notification/notificationActions';
import { requestCollections, setCollections } from './collectionsActions';

export function* collectionsGet() {
  try {
    const collections: CollectionInterface[] = yield call(getCollections);

    yield put(setCollections(collections));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}

export function* collectionSet(
  action: PayloadAction<CollectionCreateInterface>
) {
  try {
    yield call(newCollection, action.payload);
    yield put(requestCollections());
    yield put(notificationSendSuccess('collectionAdded'));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}

export function* collectionChange(action: PayloadAction<CollectionInterface>) {
  try {
    yield call(changeCollection, action.payload);
    yield put(requestCollections());
    yield put(notificationSendSuccess('changeSuccesful'));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}

export function* collectionDelete(action: PayloadAction<number>) {
  try {
    yield call(deleteCollection, action.payload);
    yield put(requestCollections());
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}
