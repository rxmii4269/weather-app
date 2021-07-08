<template>
  <div v-if="img" class="flex flex-col justify-between gap-20">
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
      <WeatherImage :img="img"/>
    </div>
    <div class="flex flex-col gap-12 text-center text-gray-350">
      <h1 class="text-8xl">15<sub class="text-4xl">&deg;C</sub></h1>
      <div class="text-3xl font-bold">Shower</div>
      <div class="mt-auto flex flex-col gap-3 font-bold">
        <div>
          <span>Today</span>
          <span class="text-center mx-3 mb-3 bottom-1 relative">&period;</span>
          <span>Fri, 5 Jun</span>
        </div>
        <div>
          <i class="bx bxs-location-plus mr-1"></i>
          <span>Helsinki</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WeatherImage from '@/components/WeatherImage.vue';

export default {
  name: 'WeatherSide',
  components: {
    WeatherImage,
  },
  props: {
    img: {
      type: String,
      default: '',
      required: true,
      validator: typeof img === 'string',
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.bg-cloud {
  background-image: url('~../assets/img/Cloud-background.png');
}
</style>
