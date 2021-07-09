<template>
  <div
    class="
      flex
      justify-start
      sm:justify-center
      md:justify-center
      lg:justify-center
      flex-wrap
      gap-2 gap-y-5
      sm:gap-10
      md:gap-1 md:gap-y-2
      lg:gap-6
      text-center
    "
  >
    <div
      v-for="day in getFiveDayForecast"
      :key="day.index"
      class="p-4 forecast bg-blue-950 flex flex-col"
    >
      <h2>Tomorrow</h2>
      <div class="flex-grow">
        <WeatherImage classes="w-28" :img="day.weather[0].icon" />
      </div>
      <div class="flex justify-between">
        <span class="text-gray-100"
          >{{ tempC(day.temp.max) }}<span>&deg;C</span></span
        >
        <span class="text-gray-400"
          >{{ tempC(day.temp.min) }}<span>&deg;C</span></span
        >
      </div>
    </div>
    <!-- <div class="p-4 bg-blue-950">
      <h2>Tomorrow</h2>
      <div class="">
        <WeatherImage classes="w-28" />
      </div>
      <div class="flex justify-center gap-9">
        <span>16<span>&deg;C</span></span>
        <span>11<span>&deg;C</span></span>
      </div>
    </div>
    <div class="p-4 bg-blue-950">
      <h2>Tomorrow</h2>
      <div class="">
        <WeatherImage classes="w-28" />
      </div>
      <div class="flex justify-center gap-9">
        <span>16<span>&deg;C</span></span>
        <span>11<span>&deg;C</span></span>
      </div>
    </div>
    <div class="p-4 bg-blue-950">
      <h2>Tomorrow</h2>
      <div class="">
        <WeatherImage classes="w-28" />
      </div>
      <div class="flex justify-center gap-9">
        <span>16<span>&deg;C</span></span>
        <span>11<span>&deg;C</span></span>
      </div>
    </div>
    <div class="p-4 bg-blue-950 text-center">
      <h2>Tomorrow</h2>
      <div class="">
        <WeatherImage classes="w-28" />
      </div>
      <div class="flex justify-center gap-9">
        <span>16<span>&deg;C</span></span>
        <span>11<span>&deg;C</span></span>
      </div>
    </div> -->
  </div>
</template>
<script>
import WeatherImage from '@/components/WeatherImage.vue';
import { mapState, mapGetters } from 'vuex';
import {
  celciusToFahrenheit,
  fahrenheitToCelcius,
} from '../../helpers/helpers';

export default {
  name: 'Forecast',
  components: {
    WeatherImage,
  },
  computed: {
    ...mapState(['weatherInfo']),
    ...mapGetters(['getFiveDayForecast']),
  },
  methods: {
    tempC: fahrenheitToCelcius,
    tempF: celciusToFahrenheit,
  },
};
</script>
<style lang="scss" scoped>
// .forecast:last-of-type {
//     align-self: center;
//     @apply mx-auto;
//   }
</style>
