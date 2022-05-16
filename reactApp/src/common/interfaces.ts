import { NotificationType } from './renderData';

export interface Page {
  title: string;
  path: string;
}

export interface AuthFormProps {
  title: string;
  callback: (value: { login: string; password: string }) => void;
}

// export interface User {
//   id: number;
//   login: string;
//   blocked: boolean;
// }

export interface UserList {
  userlist: User[];
}

export interface AuthUserInterface {
  login: string;
  password: string;
}

export interface UserListOperationsReqestInterface {
  selectedId: number[];
  userId: number;
}

//new interfaces

export interface LanguageInterface {
  title: string;
  value: string;
}

export interface User {
  id: number;
  login: string;
  role: string;
}

export interface ItemInterface {
  userId: number;
  collectionId: number;
  id: number;
  name: string;
  textField1Value: string;
  textField2Value: string;
  textField3Value: string;
  numberField1Value: number;
  numberField2Value: number;
  numberField3Value: number;
  tags: string;
  likes: string;
}

export interface ItemState {
  items: ItemInterface[];
}
export interface CollectionState {
  collections: CollectionInterface[];
}

export interface ItemCreateInterface {
  userId: number;
  collectionId: number;
  name: string;
  textField1Value?: string;
  textField2Value?: string;
  textField3Value?: string;
  numberField1Value?: number;
  numberField2Value?: number;
  numberField3Value?: number;
  tags: string;
}

export interface CollectionInterface {
  userId: number;
  type: string;
  name: string;
  id: number;
  description: string;
  textField1Name: string;
  textField2Name: string;
  textField3Name: string;
  numberField1Name: string;
  numberField2Name: string;
  numberField3Name: string;
}

export interface CollectionCreateInterface {
  userId: number;
  type: 'books' | 'alcohol' | 'boardGames';
  name: string;
  description: string;
  textField1Name?: string;
  textField2Name?: string;
  textField3Name?: string;
  numberField1Name?: string;
  numberField2Name?: string;
  numberField3Name?: string;
}

export interface TagInterface {
  tag: string;
}

export interface CommentInterface {
  comment: string;
  itemId: number;
  userId: number;
}

export interface NotificationState {
  type: NotificationType.SUCCESS | NotificationType.ERROR | '';
  message: string;
}
