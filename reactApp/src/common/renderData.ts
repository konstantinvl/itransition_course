import { Page } from './interfaces';

export const AuthPages: Page[] = [
  { title: 'loginAppHeader', path: './auth/login' },
  { title: 'signupAppHeader', path: './auth/signin' },
];

export const UserMenuPages: Page[] = [
  { title: 'myCollections', path: './mycollections' },
];

export const CollectionTypes = ['books', 'alcohol', 'boardGames'];

export enum ROLE {
  ADMIN = 'admin',
  USER = 'user',
}

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
}
