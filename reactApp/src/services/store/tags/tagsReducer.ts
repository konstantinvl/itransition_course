import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TagInterface } from '../../../common/interfaces';

const initialState = {
  tags: [] as TagInterface[],
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<TagInterface[]>) => {
      return { tags: action.payload };
    },
  },
});

export default tagsSlice.reducer;
