<template>
  <div>
    <v-app-bar
      :elevation="0"
      :color="modal?'black':'white'"
      :style="{maxHeight:'128px', height:'128' , paddingTop:'12px'}"
    >
      <v-toolbar-title v-if="!modal">
        <nuxt-link to="/">
          <v-img class="xd-image-logo mt-4" contain :src="require('~/assets/odstudiologo.png')" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <div
        :style="{height:'24px',width:'24px',backgroundColor:modal ? '#FFAA9C':'black',borderRadius:'50%'}"
        v-ripple
        @click="modal=!modal"
      />
    </v-app-bar>
    <div class="modal" v-if="modal">
      <h1 v-for="item in ['about','projects','contact','pricing']" :key="item">
        <nuxt-link :to="'/'+item">{{item}}</nuxt-link>
      </h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.modal {
  position: absolute;
  background-color: black;
  width: 100vw;
  height: 100%;
  z-index: 10;
  overflow: hidden;
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    margin: 40px 0;
    transform: translateY(55px);
    a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      modal: false
    };
  }
};
</script>