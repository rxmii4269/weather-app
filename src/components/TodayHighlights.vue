<template>
  <div>
    <h1 class="text-2xl font-semibold">Today's Highlights</h1>
    <div class="mt-5 grid grid-cols-2 gap-16">
      <div class="bg-blue-950 text-center p-6 flex flex-col gap-4">
        <h1 class="">Wind Status</h1>
        <h1 class="text-6xl">
          <span class="font-bold">7</span>
          <sub class="text-4xl">mph</sub>
        </h1>
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
        <h1 class="text-6xl">
          <span class="font-bold">84</span>
          <sub class="text-4xl relative bottom-1">%</sub>
        </h1>
        <div class="flex flex-col">
          <div class="flex justify-between font-semibold">
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
            "
            max="100"
            value="50"
          ></progress>
          <div class="flex justify-end"><span>%</span></div>
        </div>
      </div>
      <div class="bg-blue-950 p-6 text-center flex flex-col gap-4">
        <h1>Visibility</h1>
        <h1 class="text-6xl">
          <span class="font-bold">6.4</span>
          <span class="ml-4 text-4xl font-medium"> miles</span>
        </h1>
      </div>
      <div class="bg-blue-950 p-6 text-center flex flex-col gap-4">
        <h1>Air Pressure</h1>
        <h1 class="text-6xl">
            <span class="font-bold">998</span>
            <span class="ml-4 text-4xl font-medium">mb</span>
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Highlights',
  data() {
    return {};
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
