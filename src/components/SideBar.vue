<template>
  <div class="bg-blue-950 flex flex-col w-96 gap-8">
    <div
      v-if="!isVisible"
      class="px-6 pt-4 mt-4 flex flex-shrink flex-row justify-between"
    >
      <button
        class="bg-gray-650 text-gray-350 text-sm px-3 py-0"
        @click="toggleInput"
      >
        Search for places
      </button>
      <button
        title="current location"
        class="
          bg-gray-650
          text-gray-350 text-2xl
          rounded-full
          flex
          items-center
          justify-center
          h-10
          w-10
          shadow
        "
      >
        <i class="bx bx-current-location p-0"></i>
      </button>
    </div>
    <div class="flex flex-col px-8 pt-2" v-if="isVisible">
      <button
        title="cancel"
        class="text-gray-350 text-4xl justify-end items-end self-end"
        @click="cancel"
      >
        <i class="bx bx-x"></i>
      </button>
      <div class="flex flex-row gap-2">
        <input
          type="text"
          class="
            bg-blue-950
            border
            rounded-none
            border-gray-350
            text-gray-350
            search-bg
          "
          placeholder="search location"
          v-model="city"
        />
        <button
          @click="search"
          class="bg-blue-600 text-gray-350 font-semibold px-3 py-2 rounded-none"
        >
          Search
        </button>
      </div>
      <div class="mt-12 flex flex-col gap-5 text-gray-350">
        <button
          class="
            border-2 border-opacity-0
            rounded-none
            hover:border-gray-500 hover:border-opacity-1
            group
            px-2
            py-3
            text-left
            flex
            justify-between
            items-center
            button
          "
          v-for="location in locationInfo"
          :key="location.index"
          @click="getWeatherInfo(location.geometry.location, location.formatted_address)"
        >
          <span> {{ location.formatted_address }} </span>
          <i class="bx bx-chevron-right text-2xl text-gray-650 opacity-0"></i>
        </button>
      </div>
    </div>
    <div class="w-full">
      <WeatherSide v-if="!isVisible" />
    </div>
  </div>
</template>
<script>
import WeatherSide from '@/components/WeatherSide.vue';
import { mapState } from 'vuex';
import _debounce from 'lodash/debounce';

export default {
  name: 'Sidebar',
  components: {
    WeatherSide,
  },
  data() {
    return { isVisible: false, city: '' };
  },
  computed: {
    ...mapState(['locationInfo', 'weatherInfo']),
  },
  methods: {
    toggleInput() {
      this.isVisible = !this.isVisible;
    },
    cancel() {
      this.isVisible = false;
      this.$store.commit('resetLocationInfo');
    },
    search: _debounce(function () {
      this.$store.dispatch('getLocation', this.city);
    }, 500),
    getWeatherInfo: _debounce(async function (latlng, formattedaddress) {
      const lattlng = latlng;
      lattlng.formattedaddress = formattedaddress;
      await this.$store.dispatch('getForecast', latlng);
      this.cancel();
    }, 500),
  },
};
</script>
<style lang="scss">
.search-bg {
  background-image: url('~../assets/img/bx-search.svg');
  @apply pl-8 bg-no-repeat bg-scroll bg-left bg-auto;
}
.bx-search {
  @apply fill-current text-gray-350;
}
.button:hover {
  & .bx-chevron-right {
    @apply opacity-100;
  }
}
</style>
