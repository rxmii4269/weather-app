<template>
  <div class="flex justify-center gap-10 text-center">
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
    </div>
  </div>
</template>
<script>
import WeatherImage from '@/components/WeatherImage.vue';

export default {
  name: 'Forecast',
  components: {
    WeatherImage,
  },
};
</script>
