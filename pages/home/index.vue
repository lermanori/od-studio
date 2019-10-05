<template>
  <div :style="{backgroundColor:'white',overflowX:'hidden',width:'100vw'}">
    <app-header mode="homepage" />
    <div class="main-container" :style="{'width':'100%'}">
      <div :style="{'width':'100%' }">
        <div
          :style="{'width':'100%',height: $vuetify.breakpoint.xsOnly ?'70vh' : '100vh',backgroundColor:'black',marginTop:'-1px'}"
        >
          <div class="first-text-line" :style="{'width':'200vh',backgroundColor:'black'}">
            <div class="first-text-typo">
              <span
                v-for="item in $vuetify.breakpoint.xsOnly ? 2 : 3"
                :key="item"
                v-html="'WE MAKE WE MAKE '"
              ></span>
            </div>
          </div>
          <div class="second-text-line">
            <div class="second-line-typo">
              <span
                v-for="item in $vuetify.breakpoint.xsOnly ? 2 : 3"
                :key="item"
                v-html="'BEAUTIFUL THINGS '"
              ></span>
            </div>
          </div>
          <div class="circle"></div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="20 20 1000 220"
          :style="{marginTop:'-1px',width:'100vw'}"
        >
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
        </svg>
      </div>
      <div :style="{ height: $vuetify.breakpoint.xsOnly ? '70vh' : '110vh'}">
        <div class="section2-text1">
          <div>We are a modern digital</div>
          <div>design studio based in Tel Aviv.</div>
        </div>
        <div
          class="section2-text2"
        >We design and build digital experiences for the new world, making user-friendly websites and products for all devices. We create stronger relationship between the brand and their audience, while understanding their needs and creating a custom digital product.</div>
      </div>
      <div class="section-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFAA9C"
            fill-opacity="1"
            d="M0,128L120,106.7C240,85,480,43,720,26.7C960,11,1200,21,1320,26.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
        <div
          class="main-section-3"
          :style="{ height: $vuetify.breakpoint.xsOnly ? '100vh'
           : $vuetify.breakpoint.smOnly ? '120vh'
           : $vuetify.breakpoint.mdOnly ? '130vh' 
           : $vuetify.breakpoint.lgOnly ? '170vh':'150vh' 
           ,marginTop:'-9px',backgroundColor:'#FFAA9C'}"
        >
          <div class="header">
            <span>
              <div>WEBSITE DESIGN</div>
              <div>& DEVELOPMENT</div>
            </span>
          </div>
          <div class="subheading">
            Let us help your business get closer to the web, by creating a user friendly web interface that will bring a whole new audience to your business.
            <div>In the creative progress we will</div>
            <v-img
              class="lines"
              contain
              :src="$vuetify.breakpoint.mdAndDown ?require('~/assets/lines.svg'):require('~/assets/big-lines.svg')"
            />
          </div>

          <ul>
            <li
              v-for="item in ['Make a research about your business needs, audience and values.','Create strong brand identity.','Website design','Prototype.','Development']"
              :key="item"
            >
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="carousel-protfolio">
        <carousel
          :style="{height:$vuetify.breakpoint.xsOnly ? '40vh' :
        $vuetify.breakpoint.lgAndUp ? '90vh':'50vh',
        }"
        />
      </div>
      <div
        class="section-4"
        :style="{height:$vuetify.breakpoint.xsOnly ? '100vh' :
        $vuetify.breakpoint.lgAndUp ? '210vh':'110vh'
        ,backgroundColor:'#FFAA9C'}"
      >
        <div class="view-more">VIEW MORE</div>
        <div class="header">
          <span>
            <div>GRAPHIC DESIGN</div>
            <div>& SOCIAL MEDIA</div>
          </span>
        </div>
        <div
          class="subheading"
        >In the new world, everyone knows that high quality social media content is important. We offer content creation for social media, including branding and strong identity design, photography and marketing campaigns, Illustrations and graphic designs for any need.</div>
        <carousel-two
          :height="$vuetify.breakpoint.xsOnly?'25vh':'90vh'"
          :style="{marginTop:'100px'}"
        />
        <div class="view-more">VIEW MORE</div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "~/components/header";
import carousel from "~/components/carousel";
import carouselTwo from "~/components/carousel/two";
export default {
  components: {
    appHeader,
    carousel,
    carouselTwo
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "./styles/settings";
@import "./styles/base";
@import "./styles/responsive/index";
</style>