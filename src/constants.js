import axios from 'axios';

const reviewUrl = "http://localhost:8081";
const reservationUrl = "http://localhost:8080";

export const reviewInstance = axios.create({
  baseURL: reviewUrl,
});



export const reservationInstance = axios.create({
  baseURL: reservationUrl,
});
