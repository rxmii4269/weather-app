import axios from 'axios';

const { VUE_APP_ENV_API_KEY } = process.env;

const baseURL = process.env.VUE_APP_ENV_GEOCODING_API;

const Axios = axios.create({
  baseURL,
  headers: {
    'X-RapidAPI-Key': VUE_APP_ENV_API_KEY,
    'X-RapidAPI-Host': baseURL.split('https://')[1],
  },
});

export async function getLocation(address) {
  const response = await Axios.get(`geocode/json?address=${address}&language=en`);
  return response;
}

export async function reverseGeocoding(lat, lng) {
  const response = await Axios.get(`geocode/json?latlng=${lat},${lng}&language=en&result_type=locality`);
  return response;
}
