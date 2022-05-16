import { PayloadAction } from '@reduxjs/toolkit';

import { call, delay, fork, put } from 'redux-saga/effects';
import {
  ItemInterface,
  ItemCreateInterface,
  CommentInterface,
} from '../../../common/interfaces';
import { getComments, newComment } from '../../axios/requests';
import { setComments } from './commentsActions';

export function* commentsGet() {
  try {
    const comments: CommentInterface[] = yield call(getComments);

    yield put(setComments(comments));
  } catch (e) {
    yield console.log((e as Error).message);
  }
}

export function* commentSet(action: PayloadAction<CommentInterface>) {
  try {
    yield call(newComment, action.payload);
  } catch (e) {
    yield console.log((e as Error).message);
  }
}

export function* startCommentRequesting() {
  while (true) {
    yield fork(commentsGet);
    yield delay(5000);
  }
}
