<template>
  <div id="app">
    <span>HelloWorld</span>
    <vuex></vuex>
    <ab></ab>
  </div>
</template>

<script>
import vuex from "@/components/Vux.vue";
import count from "@/components/count.vue";
export default {
  data() {
    return {};
  },
  components: {
    vuex,
    "ab":count,
  },
};
</script>

<style>
</style>
