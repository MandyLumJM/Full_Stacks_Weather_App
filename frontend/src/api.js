import axios from 'axios';

const API_URL = 'http://localhost:5000/api/weather';

export const fetchWeather = async (city, country) => {
  const response = await axios.get(`${API_URL}?city=${city}&country=${country}`);
  return response.data;
};

export const fetchHistory = async () => {
  const response = await axios.get(`${API_URL}/history`);
  return response.data;
};

export const saveSearch = async (search) => {
  await axios.post(`${API_URL}/history`, search);
};

export const deleteSearch = async (id) => {
  await axios.delete(`${API_URL}/history/${id}`);
};
