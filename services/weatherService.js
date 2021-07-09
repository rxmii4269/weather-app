import axios from 'axios';

const { VUE_APP_ENV_WEATHER_API_KEY } = process.env;
const baseUrl = process.env.VUE_APP_ENV_WEATHER_API;

const Axios = axios.create({
  baseURL: baseUrl,
});

export default async function getForecast(lat, lng) {
  const response = await Axios.get(
    `onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&units=imperial&appid=${VUE_APP_ENV_WEATHER_API_KEY}`,
  );
  return response;
}
