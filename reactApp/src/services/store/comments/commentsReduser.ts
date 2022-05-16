import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentInterface } from '../../../common/interfaces';
import { RootState } from '../store';

const initialState = {
  comments: [] as CommentInterface[],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<CommentInterface[]>) => {
      return { comments: action.payload };
    },
  },
});

export const getItemState = (state: RootState) => state.comments;
export const selectCommentsByItemID = createSelector(
  [getItemState, (state, itemId: number) => itemId],
  (state, itemId) =>
    state.comments.filter((comment) => comment.itemId === itemId)
);

export default commentsSlice.reducer;
