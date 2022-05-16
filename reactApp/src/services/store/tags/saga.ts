import { call, put } from 'redux-saga/effects';
import { TagInterface } from '../../../common/interfaces';
import { getTags } from '../../axios/requests';
import { notificationSendError } from '../notification/notificationActions';
import { setTags } from './tagsActions';

export function* tagsGet() {
  try {
    const tags: TagInterface[] = yield call(getTags);
    yield put(setTags(tags));
  } catch (e) {
    yield put(notificationSendError((e as Error).message));
  }
}
