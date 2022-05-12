import { Action, PayloadAction } from '@reduxjs/toolkit';
import { ItemInterface, ItemCreateInterface } from '../../../common/interfaces';

export const SET_ITEMS = 'items/setItems';
export const REQUEST_ITEMS = 'items/requestItems';
export const REQUEST_CREATE_ITEM = 'items/requestItemCreate';
export const REQUEST_CHANGE_ITEM = 'items/requestItemChange';
export const REQUEST_DELETE_ITEM = 'items/requestItemDelete';

export function setItems(
  items: ItemInterface[]
): PayloadAction<ItemInterface[]> {
  return { type: SET_ITEMS, payload: items };
}

export function requestItems(): Action {
  return { type: REQUEST_ITEMS };
}

export function requestCreateItem(
  item: ItemCreateInterface
): PayloadAction<ItemCreateInterface> {
  return { type: REQUEST_CREATE_ITEM, payload: item };
}

export function requestChangeItem(
  item: ItemInterface
): PayloadAction<ItemInterface> {
  return { type: REQUEST_CHANGE_ITEM, payload: item };
}

export function requestDeleteItem(id: number): PayloadAction<number> {
  return { type: REQUEST_DELETE_ITEM, payload: id };
}
