import { AxiosResponse } from 'axios';
import {
  AuthUserInterface,
  CollectionInterface,
  CollectionCreateInterface,
  ItemInterface,
  ItemCreateInterface,
  User,
  TagInterface,
} from '../../common/interfaces';
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

//item requests

export const newItem = async (
  item: ItemCreateInterface
): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`items/`, {
      ...item,
    })
    .then((response: AxiosResponse) => response);
  return responce;
};

export const getItems = async (): Promise<ItemInterface[]> => {
  const responce = await axiosInstance
    .get(`items/`)
    .then((response: AxiosResponse<ItemInterface[]>) => response.data);
  return responce;
};

export const changeItem = async (
  item: ItemInterface
): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`items/change`, item)
    .then((response: AxiosResponse) => response);
  return responce;
};

export const deleteItem = async (id: number): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`items/delete/${id}`)
    .then((response: AxiosResponse) => response);
  return responce;
};

//collections requests

export const newCollection = async (
  collection: CollectionCreateInterface
): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`collections/`, {
      ...collection,
    })
    .then((response: AxiosResponse) => response);
  return responce;
};

export const getCollections = async (): Promise<CollectionInterface[]> => {
  const responce = await axiosInstance
    .get(`collections/`)
    .then((response: AxiosResponse<CollectionInterface[]>) => response.data);
  return responce;
};

export const changeCollection = async (
  collection: CollectionInterface
): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`collections/change`, collection)
    .then((response: AxiosResponse) => response);
  return responce;
};

export const deleteCollection = async (id: number): Promise<AxiosResponse> => {
  const responce: AxiosResponse = await axiosInstance
    .post(`collections/delete/${id}`)
    .then((response: AxiosResponse) => response);
  return responce;
};

//tag requsts

export const getTags = async (): Promise<TagInterface[]> => {
  const responce = await axiosInstance
    .get(`tags/`)
    .then((response: AxiosResponse<TagInterface[]>) => response.data);
  return responce;
};
