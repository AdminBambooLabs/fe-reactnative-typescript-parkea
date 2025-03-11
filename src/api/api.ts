import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-nestjs-typescript-parkea.onrender.com',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});
