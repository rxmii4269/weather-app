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
          >{{ isCelcius ? fahrenheitToCelcius(day.temp.max) : Math.round(day.temp.max)
          }}<span>&deg;{{ defaultTemp }}</span></span
        >
        <span class="text-gray-400">
          {{ isCelcius ? fahrenheitToCelcius(day.temp.min) : Math.round(day.temp.min)
          }}<span>&deg;{{ defaultTemp }} </span>
        </span>
      </div>
    </div>
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
    ...mapState(['weatherInfo', 'defaultTemp', 'isCelcius', 'isFahrenheit']),
    ...mapGetters([
      'getFiveDayForecast',
      'celciusToFahrenheit',
      'fahrenheitToCelcius',
    ]),
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
