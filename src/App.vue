<template>
  <div id="app" class="min-h-screen flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
    <Sidebar/>
    <Main/>
  </div>
</template>
<script>
import Sidebar from '@/components/SideBar.vue';
import Main from '@/components/Main.vue';
import { currentLocation } from '../helpers/helpers';

export default {
  components: {
    Sidebar,
    Main,
  },
  async mounted() {
    const result = await currentLocation();
    const { coords } = result;
    const { latitude: lat, longitude: lng } = coords;
    this.$store.dispatch('getForecast', { lat, lng });
  },
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
