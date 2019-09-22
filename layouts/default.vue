<template>
  <v-app :style="{backgroundColor:'transparent'}">
    <v-app-bar :elevation="0" color="transparent" :style="{maxHeight:'64px',  paddingTop:'12px'}">
      <v-toolbar-title>
        <v-img class="xd-image-logo mt-4" contain :src="require('~/assets/odstudiologo.png')" />
      </v-toolbar-title>
      <v-spacer />
      <div :style="{height:'24px',width:'24px',backgroundColor:'black',borderRadius:'50%'}" />
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
<style scoped>
.xd-image-logo {
  width: 170px;
  height: 129px;
  opacity: 1;
}
</style>