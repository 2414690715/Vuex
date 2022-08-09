<template>
  <div>
    <hr />
    <h2>当前计数值:{{ showNum }}</h2>
    <br />
    <button @click="addAs(19)">程序计数器+1</button>
  </div>
</template>
<script>
import { mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      // this.$store.dispatch("addAsync",3)
    },
    addAs(step) {
        // this.addAsync(step)
        this.$store.getters.showNum
    },
    ...mapActions(["addAsync"]),
  },
  computed:{
    ...mapGetters(["showNum"])

  }
};
</script>
<style lang="">
</style>