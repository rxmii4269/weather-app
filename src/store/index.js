/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';
import { getLocation, reverseGeocoding } from '../../services/geoCodingService';
import getForecast from '../../services/weatherService';
import {
  celciusToFahrenheit,
  degreesToWindDirection,
  fahrenheitToCelcius,
  unixToDate,
  weatherToIcon,
  metersToMiles,
} from '../../helpers/helpers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ClearImg: 'Clear.png',
    Cloudbg: 'Cloud-background.png',
    HailImg: 'Hail.png',
    HeavyCloudImg: 'HeavyCloud.png',
    HeavyRainImg: 'HeavyRain.png',
    LightCloudImg: 'LightCloud.png',
    LightRainImg: 'LightRain.png',
    ShowerImg: 'Shower.png',
    SleetImg: 'Sleet.png',
    SnowImg: 'Snow.png',
    ThunderStormImg: 'ThunderStorm.png',
    locationInfo: '',
    weatherInfo: '',
  },
  getters: {
    getCurrentWeatherIcon: (state) => (state.weatherInfo ? state.weatherInfo.current.weather[0].icon : 'Clear.png'),
    tempC: (state) => (state.weatherInfo ? fahrenheitToCelcius(state.weatherInfo.current.temp) : 25),
    tempF: (state) => (state.weatherInfo ? state.weatherInfo.current.temp : celciusToFahrenheit(25)),
    currentDate: (state) => (state.weatherInfo ? unixToDate(state.weatherInfo.current.dt) : 'Fri, 5 Jun'),
    currentDesc: (state) => (state.weatherInfo ? state.weatherInfo.current.weather[0].description : 'Shower'),
    currentLocation: (state) => (state.weatherInfo ? state.weatherInfo.location : 'Helsinki'),
    getCurrentWindDeg: (state) => (state.weatherInfo ? state.weatherInfo.current.wind_deg : ['N', 0 + -44]),
    getCurrentWindSpd: (state) => (state.weatherInfo ? state.weatherInfo.current.wind_speed : 7),
    getCurrentHumidity: (state) => (state.weatherInfo ? state.weatherInfo.current.humidity : 84),
    getCurrentVisibility: (state) => (state.weatherInfo ? metersToMiles(state.weatherInfo.current.visibility) : 6.4),
    getCurrentAirPressure: (state) => (state.weatherInfo ? state.weatherInfo.current.pressure : 998),
    getFiveDayForecast: (state) => (state.weatherInfo ? state.weatherInfo.daily.slice(0, 5) : [{ temp: { min: 51.8, max: 60.8 }, weather: [{ icon: 'Clear.png' }] }, { temp: { min: 51.8, max: 60.8 }, weather: [{ icon: 'Clear.png' }] }, { temp: { min: 51.8, max: 60.8 }, weather: [{ icon: 'Clear.png' }] }, { temp: { min: 51.8, max: 60.8 }, weather: [{ icon: 'Clear.png' }] }, { temp: { min: 51.8, max: 60.8 }, weather: [{ icon: 'Clear.png' }] }]),
  },
  mutations: {
    isClear(state) {
      state.currentWeather = state.ClearImg;
    },
    isHail(state) {
      state.currentWeather = state.HailImg;
    },
    isHeavyCloud(state) {
      state.currentWeather = state.HeavyCloudImg;
    },
    isHeavyRain(state) {
      state.currentWeather = state.HeavyRainImg;
    },
    isLightCloud(state) {
      state.currentWeather = state.LightCloudImg;
    },
    isLightRain(state) {
      state.currentWeather = state.LightRainImg;
    },
    isShower(state) {
      state.currentWeather = state.ShowerImg;
    },
    isSleet(state) {
      state.currentWeather = state.SleetImg;
    },
    isSnowing(state) {
      state.currentWeather = state.SnowingImg;
    },
    isThunderStorm(state) {
      state.currentWeather = state.ThunderStormImg;
    },
    setLocationInfo(state, locationInfo) {
      state.locationInfo = locationInfo;
    },
    setWeatherInfo(state, weatherInfo) {
      state.weatherInfo = weatherInfo;
    },
    resetLocationInfo(state) {
      state.locationInfo = '';
    },
  },
  actions: {
    async getForecast({ commit, dispatch, state }, {
      lat, lng, formattedaddress,
    }) {
      let result = '';
      if (lat) {
        const response = await getForecast(lat, lng);

        if (typeof formattedaddress === 'undefined') {
          const latlng = { lat, lng };
          const reslt = await dispatch('getReverseGeocoding', latlng);
          // eslint-disable-next-line no-param-reassign
          formattedaddress = reslt[0].formatted_address;
        }
        if (response.status === 200) {
          const icon = response.data.current.weather[0].id;
          response.data.current.weather[0].icon = weatherToIcon(icon);
          response.data.location = formattedaddress;
          response.data.current.wind_deg = degreesToWindDirection(response.data.current.wind_deg);
          response.data.daily.forEach((d) => {
          // eslint-disable-next-line no-param-reassign
            d.weather[0].icon = weatherToIcon(d.weather[0].id);
          });
          commit('setWeatherInfo', response.data);
        }
        result = response;
        return response;
      }
      return result;
    },
    async getLocation({ commit }, address) {
      const response = await getLocation(address);
      if (response.status === 200) {
        commit('setLocationInfo', response.data.results);
      }
    },
    async getReverseGeocoding({ commit }, { lat, lng }) {
      const response = await reverseGeocoding(lat, lng);
      return response.data.results;
    },
  },
  modules: {},
});
