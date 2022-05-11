import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export default itemSlice.reducer;
