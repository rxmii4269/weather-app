<template>
  <div>
    <h1 class="text-2xl font-semibold">Today's Highlights</h1>
    <div
      class="
        mt-5
        grid
        gap-x-5
        lg:gap-x-16
        xl:gap-x-16
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-1
        lg:grid-cols-2
        gap-16
      "
    >
      <div
        class="
          bg-blue-950
          text-center
          p-6
          flex flex-col
          gap-4
          justify-center
          items-center
        "
      >
        <h1 class="">Wind Status</h1>
        <h1 class="text-6xl mb-4">
          <span class="font-bold">{{ getCurrentWindSpd }}</span>
          <sub class="text-4xl">mph</sub>
        </h1>
        <div class="flex flex-row justify-between items-center">
          <div
            class="
              rounded-full
              py-1.5
              px-2.5
              mx-2
              bg-gray-500
              flex
              justify-center
              items-center
              text-center
            "
          >
            <i
              class="bx bxs-navigation text-xl"
              :style="{ transform: rotate }"
            ></i>
          </div>
          <h2 class="font-bold text-lg">{{ getCurrentWindDeg[0] }}</h2>
        </div>
      </div>
      <div
        class="
          bg-blue-950
          p-6
          text-center
          flex
          justify-center
          items-center
          flex-col
          gap-4
        "
      >
        <h1>Humidity</h1>
        <h1 class="text-6xl mb-4 sm:mb-0">
          <span class="font-bold">{{ getCurrentHumidity }}</span>
          <sub class="text-4xl relative bottom-1">%</sub>
        </h1>
        <div class="flex flex-col">
          <div class="flex justify-between font-semibold text-gray-400">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <progress
            class="
              rounded-full
              appearance-none
              border-none
              block
              h-2
              overflow-hidden
              p-0
              w-64
              md:w-36
              lg:w-36
              xl:w-64
            "
            max="100"
            :value="getCurrentHumidity"
          ></progress>
          <div class="flex justify-end text-gray-400"><span>%</span></div>
        </div>
      </div>
      <div class="bg-blue-950 p-6 text-center flex flex-col gap-4">
        <h1>Visibility</h1>
        <h1 class="text-6xl">
          <span class="font-bold">{{ getCurrentVisibility }}</span>
          <span class="text-4xl font-medium"> miles</span>
        </h1>
      </div>
      <div class="bg-blue-950 p-6 text-center flex flex-col gap-4">
        <h1>Air Pressure</h1>
        <h1 class="text-6xl">
          <span class="font-bold">{{ getCurrentAirPressure }}</span>
          <span class="ml-4 sm:ml-4 md:ml-0 lg:ml-0 text-4xl font-medium">mb</span>
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Highlights',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'getCurrentWindDeg',
      'getCurrentWindSpd',
      'getCurrentHumidity',
      'getCurrentVisibility',
      'getCurrentAirPressure',
    ]),
    rotate() {
      let result = '';
      if (this.getCurrentWindDeg) {
        result = `rotate(${this.getCurrentWindDeg[1]}deg)`;
      }
      return result;
    },
  },
};
</script>
<style lang="scss">
progress {
  &::-webkit-progress-bar {
    @apply bg-gray-300;
  }
  &::-webkit-progress-value {
    @apply bg-yellow-350 rounded-full;
  }
}
</style>
