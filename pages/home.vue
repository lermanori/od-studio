<template>
  <div :style="{backgroundColor:'white',overflowX:'hidden'}">
    <v-app-bar
      :elevation="0"
      color="black"
      :style="{maxHeight:'128px', height:'128' , paddingTop:'12px'}"
    >
      <v-toolbar-title>
        <v-img class="xd-image-logo mt-4" contain :src="require('~/assets/odstudiologowhite.png')" />
      </v-toolbar-title>
      <v-spacer />
      <div :style="{height:'24px',width:'24px',backgroundColor:'white',borderRadius:'50%'}" />
    </v-app-bar>
    <div class="mobile">
      <div class="white--text" :style="{'width':'375px',height:'518px',backgroundColor:'black'}">
        <div
          class="first-text-line"
          :style="{'width':'1500px',height:'104px',backgroundColor:'black'}"
        >
          <div class="first-text-typo">WE MAKE WE MAKE WE MAKE</div>
        </div>
        <div class="second-text-line" :style="{backgroundColor:'white'}">
          <div class="second-line-typo">BEAUTIFUL THINGS</div>
        </div>
        <div class="circle"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="height:100px;">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        />
      </svg>
    </div>
    <div :style="{height:'507.24px'}">
      <div class="section2-text1">We are a modern digital design studio based in Tel Aviv.</div>
      <div
        class="section2-text2"
      >We design digital experiences. We make websites, social media designs and branding for both personal and businesses needs.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.xd-image-logo {
  width: 170px;
  height: 129px;
  /* opacity: 1; */
  mix-blend-mode: difference;
}
.first-text-line {
  position: relative;
  font-size: 85px;
  color: black;
  -webkit-text-stroke: 0.5px white;
  top: 138px;
  left: -58px;
  width: 1500px;
  height: 104px;
  text-align: left;
  letter-spacing: -3.83px;
  opacity: 1;
  z-index: 7;
}
.first-text-typo {
  position: relative;
  font-size: 85px;
  color: black;
  -webkit-text-stroke: 0.5px white;
  width: 1500px;
  height: 104px;
  text-align: left;
  letter-spacing: -3.83px;
  opacity: 1;
  animation-name: move;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: 7;
}
.second-text-line {
  position: relative;
  top: 120px;
  left: -16.5px;
  width: 883px;
  height: 105px;
  text-align: left;
  letter-spacing: -2.55px;
  opacity: 1;
  padding-bottom: 20px;
  z-index: 3;
}
.second-line-typo {
  font-size: 85px;
  color: white;
  -webkit-text-stroke: 1.5px black;
  height: 90px;

  animation-name: movement;
  animation-duration: 1.9s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.circle {
  position: relative;
  top: 248px;
  left: 164px;
  width: 162px;
  height: 164px;

  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
  mix-blend-mode: difference;
}
.section2-text1 {
  position: relative;
  top: 60px;
  padding-left: 18px;
  width: 315px;
  height: 69px;
  text-align: left;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
}
.section2-text2 {
  position: relative;
  top: 120px;
  left: 140px;
  width: 220px;
  height: 167px;
  text-align: left;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
  line-height: 27px;
  border-left: 1px solid black;
  padding-left: 18.5px;
}
@keyframes move {
  from {
    transform: translateX(400px);
  }
  to {
    transform: translateX(-1000px);
  }
}
@keyframes movement {
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateX(-800px);
  }
}
</style>