import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://itr-task45.herokuapp.com/api/',
  timeout: 10000,
});

export default axiosInstance;
