import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkItem, splitTags } from '../../../common/functions';
import { ItemInterface, ItemState } from '../../../common/interfaces';
import { RootState } from '../store';

const initialState: ItemState = {
  items: [],
};

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<ItemInterface[]>) => {
      return { items: action.payload };
    },
  },
});

export const getItemState = (state: RootState): ItemState => state.items;
export const selectItemsByCollectionID = createSelector(
  [getItemState, (state, collectionId: number) => collectionId],
  (state, collectionId) =>
    state.items.filter((item) => item.collectionId === collectionId)
);
export const selectItemsByTag = createSelector(
  [getItemState, (state, tag: string) => tag],
  (state, tag) =>
    state.items.filter((item) => {
      const tags = splitTags(item.tags);
      if (tags) {
        return tags.includes(tag);
      }
      return false;
    })
);

export const selectItemsByID = createSelector(
  [getItemState, (state, id: number) => id],
  (state, id) => state.items.find((item) => item.id === id)
);

export const selectItemsBySearch = createSelector(
  [getItemState, (state, search: string) => search],
  (state, search) => state.items.filter((item) => checkItem(item, search))
);

export default itemSlice.reducer;
