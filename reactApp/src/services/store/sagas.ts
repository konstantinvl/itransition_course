import {
  ForkEffect,
  select,
  SelectEffect,
  takeEvery,
} from 'redux-saga/effects';
import {
  REQUEST_CHANGE_COLLECTION,
  REQUEST_COLLECTIONS,
  REQUEST_CREATE_COLLECTION,
  REQUEST_DELETE_COLLECTION,
} from './collections/collectionsActions';
import {
  collectionChange,
  collectionDelete,
  collectionSet,
  collectionsGet,
} from './collections/saga';
import {
  REQUEST_COMMENTS,
  REQUEST_CREATE_COMMENT,
} from './comments/commentsActions';
import { commentSet, startCommentRequesting } from './comments/saga';
import { START_APP } from './commonActions';
import { appStart } from './commonSaga';
import {
  REQUEST_CHANGE_ITEM,
  REQUEST_CREATE_ITEM,
  REQUEST_DELETE_ITEM,
  REQUEST_ITEMS,
  REQUEST_LIKE_ITEM,
} from './items/itemsActions';
import {
  itemChange,
  itemDelete,
  itemLike,
  itemSet,
  itemsGet,
} from './items/saga';
import { tagsGet } from './tags/saga';
import { REQUEST_TAGS } from './tags/tagsActions';
import { loginUser, signupUser } from './user/saga';
import { REQUEST_LOGIN_USER, REQUEST_SIGNUP_USER } from './user/userActions';
import { userlistGet } from './userList/saga';
import { REQUEST_USERLIST } from './userList/userListActions';
// import { usersBlock, usersDelete, usersUnblock } from './userList/saga';

function* mySaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(REQUEST_LOGIN_USER, loginUser);
  yield takeEvery(REQUEST_SIGNUP_USER, signupUser);

  yield takeEvery(REQUEST_ITEMS, itemsGet);
  yield takeEvery(REQUEST_CREATE_ITEM, itemSet);
  yield takeEvery(REQUEST_CHANGE_ITEM, itemChange);
  yield takeEvery(REQUEST_DELETE_ITEM, itemDelete);
  yield takeEvery(REQUEST_LIKE_ITEM, itemLike);

  yield takeEvery(REQUEST_COLLECTIONS, collectionsGet);
  yield takeEvery(REQUEST_CREATE_COLLECTION, collectionSet);
  yield takeEvery(REQUEST_CHANGE_COLLECTION, collectionChange);
  yield takeEvery(REQUEST_DELETE_COLLECTION, collectionDelete);

  yield takeEvery(REQUEST_COMMENTS, startCommentRequesting);
  yield takeEvery(REQUEST_CREATE_COMMENT, commentSet);

  yield takeEvery(REQUEST_USERLIST, userlistGet);

  yield takeEvery(REQUEST_TAGS, tagsGet);

  yield takeEvery(START_APP, appStart);

  yield takeEvery('*', function* logger(action): Generator<
    SelectEffect,
    void,
    unknown
  > {
    const state = yield select();
    console.log('action', action);
    console.log('state after', state);
  });
  // yield takeEvery(REQUEST_DELETING, usersDelete);
  // yield takeEvery(REQUEST_BLOCKING, usersBlock);
  // yield takeEvery(REQUEST_UNBLOCKING, usersUnblock);
}

export default mySaga;
