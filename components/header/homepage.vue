<template>
  <div>
    <v-app-bar :elevation="0" color="black" :style="{maxHeight:'128px', height:'128'}">
      <v-toolbar-title>
        <nuxt-link to="/">
          <v-img
            class="xd-image-logo mt-4"
            contain
            :src="require('~/assets/odstudiologowhite.png')"
          />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <div class="left-side-menu">
        <h6 v-for="item in ['about','projects','contact','pricing']" :key="item">
          <nuxt-link :to="'/'+item">{{item}}</nuxt-link>
        </h6>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ["about", "projects", "contact", "pricing"]
    };
  }
};
</script>
<style lang="scss" scoped>
.xd-image-logo {
  transform: scale(1.2);
}
.left-side-menu {
  height: 25vh;
  border-left: 1px solid #bfbfbf;
  padding-top: 10vh;
  padding-left: 6vw;
  h6 {
    margin: 10px 10px;
    a {
      text-decoration: none;
      color: #bfbfbf;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
.xd-image-logo {
  width: 170px;
  height: 129px;
  /* opacity: 1; */
  mix-blend-mode: difference;
}
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