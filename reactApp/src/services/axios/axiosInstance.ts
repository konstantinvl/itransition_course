import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://itr-course-task.herokuapp.com/api/',
  timeout: 10000,
});

//check
export default axiosInstance;
