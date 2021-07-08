<template>
  <div id="app" class="min-h-screen flex flex-row">
    <Sidebar/>
    <Main/>
  </div>
</template>
<script>
import Sidebar from '@/components/SideBar.vue';
import Main from '@/components/Main.vue';

export default {
  components: {
    Sidebar,
    Main,
  },
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
