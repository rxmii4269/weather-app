<template>
  <div
    class="
      bg-blue-960
      flex flex-col flex-1
      w-full
      px-0
      sm:px-2
      md:px-8
      lg:px-16
      gap-10
      pt-4
      sm:pt-4
      md:pt-0
      lg:pt-0
    "
  >
    <div class="mt-4 hidden sm:hidden md:flex lg:flex flex-row gap-3 self-end">
      <button
        title="Celcius"
        class="
          rounded-full
           text-lg
          font-bold
          flex
          items-center
          justify-center
          h-10
          w-10
          shadow
        "
        :class="[isCelcius ? 'bg-gray-350 text-black' : 'bg-gray-650 text-gray-350']"
        @click="toCelcius"
      >
        <span>&deg;</span>
        <span>C</span>
      </button>
      <button
        title="Farhenhiet"
        class="
          rounded-full
          text-lg
          font-bold
          flex
          items-center
          justify-center
          h-10
          w-10
          shadow
        "
        :class="[isFahrenheit ? 'bg-gray-350 text-black' : 'bg-gray-650 text-gray-350']"
        @click="toFahrenheit"
      >
        <span>&deg;</span>
        <span>F</span>
      </button>
    </div>
    <div class="flex-1 w-full flex flex-col gap-24 px-3 text-gray-350">
      <Forecast />
      <Highlights />
    </div>

    <Footer />
  </div>
</template>
<script>
import Forecast from '@/components/FiveDayForecast.vue';
import Highlights from '@/components/TodayHighlights.vue';
import Footer from '@/components/Footer.vue';
import { mapState } from 'vuex';

export default {
  name: 'Main',

  components: {
    Forecast,
    Highlights,
    Footer,
  },
  computed: {
    ...mapState(['isCelcius', 'isFahrenheit']),
  },

  methods: {
    toCelcius() {
      this.$store.commit('setToCelcius');
    },
    toFahrenheit() {
      this.$store.commit('setToFahrenheit');
    },
  },
};
</script>
