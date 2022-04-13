import { userInfo } from 'os';
import User from '../app';
import { NewUserInterface, UserInterface } from './user';

async function findUserbyLogin(login: string) {
  return User.findOne({ where: { login: login } })
    .then((user) => {
      if (!user) return false;
      console.log(user.login, user.id);
      return user;
    })
    .catch(() => {
      return false;
    });
}

export async function getUserById(id: number) {
  const user = User.findByPk(id)
    .then((user) => {
      if (!user) return { id: 0, login: '', blocked: true };
      return user;
    })
    .catch((e) => {
      throw Error(e);
    });
  return Promise.resolve<UserInterface>(
    user ? { ...user } : { id: 0, login: '', blocked: true }
  );
}

export async function deleteUserById(id: number) {
  User.destroy({ where: { id: id } });
}

export async function blockUserById(id: number) {
  User.update({ blocked: true }, { where: { id: id } });
}

export async function unblockUserById(id: number) {
  User.update({ blocked: false }, { where: { id: id } });
}

export async function setNewUser(user: NewUserInterface) {
  const { login, password } = user;
  const isUser = await findUserbyLogin(login);
  if (isUser)
    return Promise.reject(
      new Error(`User with login ${login} already exists.`)
    );
  const newUser = await User.create({
    login: login,
    password: password,
  });
  return Promise.resolve<UserInterface>({
    ...newUser,
  });
}

export async function getUserlist() {
  return Promise.resolve<UserInterface[]>(
    User.findAll({ attributes: ['id', 'login', 'blocked'] })
  );
}
