import { Action, PayloadAction } from '@reduxjs/toolkit';
import { CommentInterface } from '../../../common/interfaces';

export const SET_COMMENTS = 'comments/setComments';
export const REQUEST_COMMENTS = 'comments/requestComments';
export const REQUEST_CREATE_COMMENT = 'comments/requestCommentCreate';

export function setComments(
  comments: CommentInterface[]
): PayloadAction<CommentInterface[]> {
  return { type: SET_COMMENTS, payload: comments };
}

export function requestComments(): Action {
  return { type: REQUEST_COMMENTS };
}

export function requestCreateComment(
  comment: CommentInterface
): PayloadAction<CommentInterface> {
  return { type: REQUEST_CREATE_COMMENT, payload: comment };
}
