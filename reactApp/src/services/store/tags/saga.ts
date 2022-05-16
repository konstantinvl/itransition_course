import { call, put } from 'redux-saga/effects';
import { TagInterface } from '../../../common/interfaces';
import { getTags } from '../../axios/requests';
import { setTags } from './tagsActions';

export function* tagsGet() {
  try {
    const tags: TagInterface[] = yield call(getTags);
    console.log(tags);
    yield put(setTags(tags));
  } catch (e) {
    yield console.log((e as Error).message);
  }
}
