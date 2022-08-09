<template>
  <div>
    Vuex的基本使用<br />
    <h2>当前count的值为{{ count }}</h2>
    <button @click="sub()">+1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    // add(){
    //     this.$store.commit('add',2)
    // },
    ...mapMutations(["incr","addN"]),
    sub(){
        this.addN(3);
    }
  },
  computed: {
    ...mapState(["count"]),
  },
};
</script>

<style>
</style>