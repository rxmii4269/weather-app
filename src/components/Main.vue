<template>
  <div class="bg-blue-960 flex flex-col flex-1 w-full px-16 gap-10">
    <div class="mt-4 flex flex-row gap-3 self-end">
      <button
        title="Celcius"
        class="
          rounded-full
          bg-gray-650
          text-gray-350 text-lg
          font-bold
          flex
          items-center
          justify-center
          h-10
          w-10
          shadow
        "
      >
        <span>&deg;</span>
        <span>C</span>
      </button>
      <button
        title="Farhenhiet"
        class="
          rounded-full
          bg-gray-650
          text-gray-350 text-lg
          font-bold
          flex
          items-center
          justify-center
          h-10
          w-10
          shadow
        "
      >
        <span>&deg;</span>
        <span>F</span>
      </button>
    </div>
    <div class="flex-1 w-full flex flex-col gap-24 text-gray-350">
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

export default {
  name: 'Main',

  components: {
    Forecast,
    Highlights,
    Footer,
  },
};
</script>
