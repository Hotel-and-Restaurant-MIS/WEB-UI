import axios from 'axios';

export const urlInstanse = axios.create({
  baseURL: "/api"
});
