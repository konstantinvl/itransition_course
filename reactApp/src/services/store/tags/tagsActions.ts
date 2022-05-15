import { Action, PayloadAction } from '@reduxjs/toolkit';
import { TagInterface } from '../../../common/interfaces';

export const SET_TAGS = 'tags/setTags';
export const REQUEST_TAGS = 'tags/requestTags';

export function setTags(tags: TagInterface[]): PayloadAction<TagInterface[]> {
  return { type: SET_TAGS, payload: tags };
}

export function requestTags(): Action {
  return { type: REQUEST_TAGS };
}
