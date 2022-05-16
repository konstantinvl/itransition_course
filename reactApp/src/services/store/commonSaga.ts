import { all, put } from 'redux-saga/effects';
import { requestCollections } from './collections/collectionsActions';
import { requestComments } from './comments/commentsActions';
import { requestItems } from './items/itemsActions';
import { requestTags } from './tags/tagsActions';
import { requestUserList } from './userList/userListActions';

export function* appStart() {
  try {
    yield all([
      put(requestUserList()),
      put(requestCollections()),
      put(requestItems()),
      put(requestTags()),
      put(requestComments()),
    ]);
  } catch (e) {
    yield console.log((e as Error).message);
  }
}
