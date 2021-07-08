import axios from 'axios';

const { VUE_APP_ENV_API_KEY } = process.env;
const baseUrl = process.env.VUE_APP_ENV_WEATHER_API;

const Axios = axios.create({
  baseURL: baseUrl,
  headers: {
    'X-RapidAPI-Key': VUE_APP_ENV_API_KEY,
    'X-RapidAPI-Host': baseUrl.split('https://')[1],
  },
});

export default async function getForecast(lat, lng) {
  const response = await Axios.get(`/${lng},${lat}?lang=en&units=auto`);
  console.log(response);
  return response;
}
