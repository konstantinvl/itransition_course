import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4050/api/',
  timeout: 10000,
});

//check
export default axiosInstance;
