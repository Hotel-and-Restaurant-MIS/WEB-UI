import axios from 'axios';

export const reviewService = axios.create({
  baseURL: "/review"
});

export const reservationService = axios.create({
  baseURL: "/reservations"
});

export const bookingService = axios.create({
  baseURL: "/bookings"
});

export const customerService = axios.create({
  baseURL: "/customer"
});

export const roomTypeService = axios.create({
  baseURL: "/roomtype"
});

export const roomService = axios.create({
  baseURL: "/rooms"
});

