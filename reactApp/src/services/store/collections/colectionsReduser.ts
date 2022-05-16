import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { biggestCollections } from '../../../common/functions';
import {
  CollectionInterface,
  CollectionState,
} from '../../../common/interfaces';
import { RootState } from '../store';

const initialState: CollectionState = {
  collections: [],
};

const collectionSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    setCollections: (state, action: PayloadAction<CollectionInterface[]>) => {
      return { collections: action.payload };
    },
  },
});

export const getState = (state: RootState) => state;
export const getCollectionState = (state: RootState): CollectionState =>
  state.collections;
export const selectCollectionByID = createSelector(
  [getCollectionState, (state, id: number) => id],
  (state, id) => state.collections.find((collection) => collection.id === id)
);
export const selectCollectionsByUserID = createSelector(
  [getCollectionState, (state, userId: number) => userId],
  (state, userId) =>
    state.collections.filter((collection) => collection.userId === userId)
);
export const selectBiggestCollections = createSelector([getState], (state) =>
  biggestCollections(state.collections.collections, state)
);

export default collectionSlice.reducer;
