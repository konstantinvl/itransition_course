import { Action, PayloadAction } from '@reduxjs/toolkit';
import {
  CollectionCreateInterface,
  CollectionInterface,
} from '../../../common/interfaces';

export const SET_COLLECTIONS = 'collections/setCollections';
export const REQUEST_COLLECTIONS = 'collections/requestCollections';
export const REQUEST_CREATE_COLLECTION = 'collections/requestCollectionCreate';
export const REQUEST_CHANGE_COLLECTION = 'collections/requestCollectionChange';

export function setCollections(
  collections: CollectionInterface[]
): PayloadAction<CollectionInterface[]> {
  return { type: SET_COLLECTIONS, payload: collections };
}

export function requestCollections(): Action {
  return { type: REQUEST_COLLECTIONS };
}

export function requestCreateCollection(
  collection: CollectionCreateInterface
): PayloadAction<CollectionCreateInterface> {
  return { type: REQUEST_CREATE_COLLECTION, payload: collection };
}

export function requestChangeCollection(
  collection: CollectionInterface
): PayloadAction<CollectionInterface> {
  return { type: REQUEST_CHANGE_COLLECTION, payload: collection };
}
