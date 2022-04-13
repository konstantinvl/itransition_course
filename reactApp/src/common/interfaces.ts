export interface Page {
  title: string;
  path: string;
}

export interface AuthFormProps {
  title: string;
  callback: (value: { login: string; password: string }) => void;
}

export interface User {
  id: string;
  login: string;
  blocked: boolean;
}

export interface UserList {
  userlist: User[];
}
