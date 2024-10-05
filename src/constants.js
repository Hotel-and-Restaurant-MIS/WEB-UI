import axios from 'axios';

export const urlInstance = axios.create({
  baseURL: "/api",
  headers: {
    'Content-Type': 'application/json',  // Ensure correct content type for POST
    'Accept': 'application/json',
  }
});

