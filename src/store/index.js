import Vue from 'vue';
import Vuex from 'vuex';

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
    currentWeather: '',
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
  },
  actions: {
  },
  modules: {
  },
});
