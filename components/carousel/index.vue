<template>
  <v-carousel :hide-delimiters="true" :show-arrows="false" v-model="model">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile :style="{}">
        <v-row class="fill-height" justify="center" align="center">
          <div style="text-align:center">
            <div
              class="black--text font-weight-black"
              :style="{fontSize:calculateFontSize()+'px'}"
            >WE ARE ENTER</div>
            <div
              class="black--text font-weight-bold mx-9"
              :style="{fontSize:(calculateFontSize() /3.3) + 'px'}"
            >
              PORTFOLIO WEB DESIGN
              <div>TEMPLATE</div>
            </div>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-row wrap style="max-width:99vw;transform:translateY(-4vh);" align="end">
      <div class="prev">
        <v-img contain :src="require('~/assets/right-arrow.svg')" @click="model-- " />
      </div>
      <v-spacer />
      <div class="next">
        <v-img :src="require('~/assets/right-arrow.svg')" @click="model++" />
      </div>
    </v-row>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      colors: ["white", "secondary", "yellow darken-2", "red", "orange"],
      model: 0
    };
  },
  methods: {
    calculateFontSize() {
      let size = 28;
      if (this.$vuetify.breakpoint.xsOnly) size = 28;
      else if (this.$vuetify.breakpoint.smOnly) size = 48;
      else if (this.$vuetify.breakpoint.mdOnly) size = 68;
      else if (this.$vuetify.breakpoint.lgOnly) size = 88;
      else if (this.$vuetify.breakpoint.xlOnly) size = 98;
      return size;
    }
  }
};
</script>
<style lang="scss" scoped>
.prev,
.next {
  align-self: bottom;
}

.prev {
  margin-left: 15px;
  transform: rotate(180deg);
}
</style>