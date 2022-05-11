import { Action } from '@reduxjs/toolkit';

export const START_APP = 'startApp';

export function requestStartApp(): Action {
  return { type: START_APP };
}
