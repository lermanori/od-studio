<template>
  <component :is="component" />
</template>

<script>
// import basic from "./basic";
export default {
  props: ["mode"],
  //   components: {
  //     basic
  //   },
  computed: {
    component() {
      return () => import(`./${this.mode}`);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>