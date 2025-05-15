import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-nestjs-typescript-parkea.onrender.com',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log('❌ Error data:', error.response.data);
      console.log('❌ Error status:', error.response.status);
      console.log('❌ Error headers:', error.response.headers);
    } else if (error.request) {
      console.log('❌ No response received:', error.request);
    } else {
      console.log('❌ Request setup error:', error.message);
    }
    return Promise.reject(error);
  },
);
