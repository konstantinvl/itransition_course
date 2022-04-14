export interface Page {
  title: string;
  path: string;
}

export interface AuthFormProps {
  title: string;
  callback: (value: { login: string; password: string }) => void;
}

export interface User {
  id: number;
  login: string;
  blocked: boolean;
}

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
