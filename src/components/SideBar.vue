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
        @click="toggleInput"
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
        <button @click="search" class="bg-blue-600 text-gray-350 px-3 py-2 rounded-none">
          Search
        </button>
      </div>
    </div>
    <div class="w-full">
      <WeatherSide v-if="!isVisible" :img="currentWeather" />
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
  mounted() {
    this.$store.commit('isClear');
  },
  computed: {
    ...mapState(['currentWeather']),
  },
  methods: {
    toggleInput() {
      this.isVisible = !this.isVisible;
    },
    search: _debounce(function () {
      console.log(this.city);
      this.$store.dispatch('getLocation', this.city);
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
</style>
