<template>
  <div class="flex flex-col justify-between gap-20">
    <div
      class="
        bg-blend-darken
        bg-cloud
        bg-origin-padding
        bg-cover
        bg-clip-border
        bg-bottom
        bg-opacity-90
        bg-blue-950
        flex
        justify-center
        items-center
        flex-1
        w-full
      "
    >
      <WeatherImage :img="getCurrentWeatherIcon" />
    </div>
    <div class="flex flex-col gap-12 text-center text-gray-350">
      <h1 class="text-8xl">{{ tempC }}<sub class="text-4xl">&deg;C</sub></h1>
      <div class="text-3xl font-bold capitalize">
        {{ currentDesc }}
      </div>
      <div class="mt-auto flex flex-col gap-3 font-bold">
        <div>
          <span>Today</span>
          <span class="text-center mx-3 mb-3 bottom-1 relative">&period;</span>
          <span>{{ currentDate }}</span>
        </div>
        <div>
          <i class="bx bxs-map mr-1"></i>
          <span>{{currentLocation}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WeatherImage from '@/components/WeatherImage.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'WeatherSide',
  components: {
    WeatherImage,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['weatherInfo']),
    ...mapGetters([
      'getCurrentWeatherIcon',
      'tempC',
      'tempF',
      'currentDate',
      'currentDesc',
      'currentLocation',
    ]),
  },
};
</script>
<style lang="scss" scoped>
.bg-cloud {
  background-image: url('~../assets/img/Cloud-background.png');
}
</style>
