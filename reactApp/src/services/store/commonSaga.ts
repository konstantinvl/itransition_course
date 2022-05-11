import { all, put } from 'redux-saga/effects';
import { requestCollections } from './collections/collectionsActions';
import { requestItems } from './items/itemsActions';
import { requestUserList } from './userList/userListActions';

export function* appStart() {
  try {
    yield all([
      put(requestUserList()),
      put(requestCollections()),
      put(requestItems()),
    ]);
  } catch (e) {
    yield console.log((e as Error).message);
  }
}
