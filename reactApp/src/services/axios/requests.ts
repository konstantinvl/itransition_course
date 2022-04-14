import { AxiosResponse } from 'axios';
import { AuthUserInterface, User } from '../../common/interfaces';
import axiosInstance from './axiosInstance';

export const login = async ({
  login,
  password,
}: AuthUserInterface): Promise<User> => {
  const responce = await axiosInstance
    .post(`userlist/login`, { login, password })
    .then((response: AxiosResponse<User>) => response.data);
  return responce;
};

export const newUser = async ({
  login,
  password,
}: AuthUserInterface): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`userlist/newuser`, { login, password })
    .then((response: AxiosResponse) => response);
  return responce;
};

export const getUserList = async (): Promise<User[]> => {
  const responce = await axiosInstance
    .get(`userlist/`)
    .then((response: AxiosResponse<User[]>) => response.data);
  return responce;
};

export const getUserById = async (id: number): Promise<User> => {
  const responce = await axiosInstance
    .get(`userlist/${id}`)
    .then((response: AxiosResponse<User>) => response.data);
  return responce;
};

export const blockUsers = async (
  selectedId: number[]
): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`userlist/block`, selectedId)
    .then((response: AxiosResponse) => response);
  return responce;
};

export const unblockUsers = async (
  selectedId: number[]
): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`userlist/unblock`, selectedId)
    .then((response: AxiosResponse) => response);
  return responce;
};

export const deleteUsers = async (
  selectedId: number[]
): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`userlist/delete`, selectedId)
    .then((response: AxiosResponse) => response);
  return responce;
};
