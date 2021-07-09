<template>
  <img v-if="img" :class="classes" :src="require(`@/assets/img/${img}`)" alt="" />
</template>
<script>
export default {
  name: 'WeatherImage',
  props: {
    img: {
      type: String,
      default: 'Clear.png',
    },
    classes: {
      type: String,
      default: '',
    },
  },
};
</script>
