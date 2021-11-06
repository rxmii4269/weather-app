<template>
  <div>
    <h1 class="text-2xl font-semibold text-center sm:text-left mb-5">Five Day Forecast</h1>
    <div
      class="
        flex
        justify-center
        content-evenly
        sm:content-0
        sm:justify-center
        md:justify-start
        lg:justify-start
        xl:justify-start
        flex-wrap
        gap-2 gap-y-1
        sm:gap-4
        md:gap-2 md:gap-y-2
        lg:gap-5
        xl:gap-5
        text-center
      "
    >
      <div
        v-for="(day, index) in getFiveDayForecast"
        :key="index"
        class="p-4 forecast bg-blue-950 m-4 sm:m-0 md:m-0 flex flex-col"
      >
        <h2>{{ index === 0 ? 'Tomorrow' : unixToDate(day.dt) }}</h2>
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
  </div>
</template>
<script>
import WeatherImage from '@/components/WeatherImage.vue';
import { mapState, mapGetters } from 'vuex';
import { celciusToFahrenheit, fahrenheitToCelcius, unixToDate } from '../../helpers/helpers';

export default {
  name: 'Forecast',
  components: {
    WeatherImage,
  },
  computed: {
    ...mapState(['weatherInfo', 'defaultTemp', 'isCelcius', 'isFahrenheit']),
    ...mapGetters(['getFiveDayForecast', 'celciusToFahrenheit', 'fahrenheitToCelcius']),
  },
  methods: {
    tempC: fahrenheitToCelcius,
    tempF: celciusToFahrenheit,
    unixToDate,
  },
};
</script>
<style lang="scss" scoped>
// .forecast:last-of-type {
//     align-self: center;
//     @apply mx-auto;
//   }
</style>
