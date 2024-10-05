import axios from 'axios';

export const urlInstance = axios.create({

  // baseURL: "http://34.136.246.135"

  baseURL: "/api",
  headers: {
    'Content-Type': 'application/json',  // Ensure correct content type for POST
    'Accept': 'application/json',
  }
});

