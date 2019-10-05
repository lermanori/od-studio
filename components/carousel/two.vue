<template>
  <v-carousel :hide-delimiters="true" :show-arrows="false" v-model="model" :height="height">
    <v-sheet :color="'#FFAA9C'" width="100%" tile :style="{}">
      <v-carousel-item v-for="(img, i) in images" :key="i">
        <v-row align="end" justify="center">
          <v-col :cols="6" v-for="i in img" :key="i">
            <v-sheet :color="'white'" :height="height" tile :style="{}">
              <v-img :aspect-ratio="1" height="100%" :src="i" style />
              <v-row class="fill-height pb-6" justify="center" align="center">
                <div style="text-align:center">
                  <div
                    class="black--text font-weight-black px-5"
                    :style="{fontSize:calculateFontSize()+'px'}"
                  >WE ARE ENTER</div>
                  <div
                    class="black--text font-weight-medium px-7"
                    :style="{fontSize:calculateFontSize()/2+'px'}"
                  >PORTFOLIO WEB DESIGN TEMPLATE</div>
                </div>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-sheet>
    <v-row wrap class="controls">
      <div class="prev">
        <v-img contain :src="require('~/assets/right-arrow.svg')" @click="model-- " />
      </div>
      <v-spacer />
      <div class="next">
        <v-img contain :src="require('~/assets/right-arrow.svg')" @click="model++" />
      </div>
    </v-row>
  </v-carousel>
</template>
<script>
export default {
  props: ["height"],
  data() {
    return {
      images: [
        [
          "https://images.pexels.com/photos/34225/spider-web-with-water-beads-network-dewdrop.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        ],
        [
          "https://images.pexels.com/photos/276502/pexels-photo-276502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/276223/pexels-photo-276223.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        ]
      ],
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
@import "~/assets/styles/index";
@keyframes opacity-two {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
.first-line {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: black;
  z-index: 2;
  align-self: flex-end;
}
.second-line {
  color: black;
  font-size: 15px;
  font-weight: 400;
  width: 190px;
  text-align: center;
  z-index: 2;
}
.prev,
.next {
  align-self: bottom;
}

.prev {
  margin-left: 15px;
  transform: rotate(180deg);
}
.next {
  margin-right: -5px;
}
.v-image {
  align-items: flex-end;
  padding-bottom: 20px;
}
.col {
  position: relative;
  padding: 2px;
  .v-image {
    background-color: white;
    position: absolute;
    z-index: 0;
    width: 100%;
    opacity: 0.1;
    height: 500px;
  }

  .text-container {
    height: 100%;
    padding-top: 40%;
  }
}
.v-sheet,
.v-carousel {
  @include for-mobile-only {
    max-height: 25vh;
  }
  max-height: 90vh;
}
.controls {
  transform: translateY(-4vh);
  max-width: 99vw;
}
.col:hover {
  .v-image {
    animation-name: opacity-two;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-direction: normal;
  }
  .text-container {
    animation-name: opacity-two;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-direction: reverse;
  }
}
</style>