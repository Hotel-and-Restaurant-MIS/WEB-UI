import axios from 'axios';

export const urlInstanse = axios.create({
  baseURL: "https://35.223.107.248/api"
});
