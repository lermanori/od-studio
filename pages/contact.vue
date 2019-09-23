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
      <div class="app-particles">
        <app-particles />
      </div>
      <div class="hero">LET'S MAKE SOME CRAZY THINGS TOGETHER</div>
      <div class="triangle-white" />
      <div class="triangle-pink" />
      <div class="form-container">
        <form
          ref="form"
          dark
          v-if="!sent"
          action="https://formspree.io/lermanori@gmail.com"
          method="POST"
        >
          <v-text-field
            dark
            class="text-field"
            outlined
            name="name"
            label="NAME"
            color="#FFAA9C"
            v-model="message.name"
          />
          <v-text-field
            class="text-field"
            name="email"
            dark
            outlined
            label="EMAIL"
            color="#FFAA9C"
            v-model="message.email"
          />
          <v-text-field
            class="text-field"
            dark
            outlined
            label="SUBJECT"
            color="#FFAA9C"
            name="subject"
            v-model="message.subject"
          />
          <v-text-field
            class="text-field"
            dark
            outlined
            name="message"
            label="MESSAGE"
            color="#FFAA9C"
            v-model="message.body"
          />
          <v-btn dark class="send-button" @click="handle_submit">SEND</v-btn>
        </form>
        <div
          class="white--text text-center animate-fade-in"
          :style="{fontSize:'20px',fontWeight:'350'}"
          v-if="sent"
        >
          <div>THANK YOU.</div>
          <div>WE WILL GET BACK TO YOU SOON.</div>
          <!-- <v-btn @click="sent=false">dev-restart</v-btn> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueParticles from "../components/particles";
export default {
  components: {
    "app-particles": VueParticles
  },
  methods: {
    handle_submit() {
      this.sent = true;
      const form = this.$refs.form;
      console.log(form.submit());
    }
  },
  data() {
    return {
      sent: false,
      message: {
        name: "",
        email: "",
        subject: "",
        body: ""
      }
    };
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(400px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
.animate-fade-in {
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
@keyframes anima {
  0% {
    transform: translateY(0px) rotateZ(0deg);
  }
  30% {
    transform: translateY(-150px) rotateZ(180deg) rotateY(0deg);
  }
  50% {
    transform: translateY(-150px) rotateZ(180deg) rotateY(360deg);
  }
  100% {
    transform: translateY(0px) rotateZ(0deg) rotateY(360deg);
  }
}
.app-particles {
  height: 50vh;
}
.text-field {
  border-radius: 0;
}
.hero {
  -webkit-text-stroke: 1px white;
  font-size: 70px;
  font-weight: 600;
  line-height: 59px;
  position: relative;
  top: 10px;
  padding-left: 12.5px;
  padding-right: 12.5px;
}
.xd-image-logo {
  width: 170px;
  height: 129px;
  /* opacity: 1; */
  mix-blend-mode: difference;
}
.mobile {
  width: 375px;
  height: 1348px;
  background-color: black;
}
.triangle-pink {
  position: relative;
  top: -300px;
  left: 270px;
  width: 0;
  height: 0;
  border-top: 65px solid #ffaa9c;
  border-right: 40px solid transparent;
  border-left: 40px solid transparent;
  z-index: 3;
  animation-name: anima;
  animation-delay: 3s;
  animation-duration: 4.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
.triangle-white {
  position: relative;
  top: -220px;
  left: 270px;
  width: 0;
  height: 0;
  border-top: 65px solid #ffffff;
  border-right: 40px solid transparent;
  border-left: 40px solid transparent;
  z-index: 0;
}
.form-container {
  height: 50vh;
  position: relative;
  top: 0px;
  padding: 15px;
}
.send-button {
  height: 71px;
  width: 38px;
  padding: 8px 12px;
  position: relative;
  left: 270px;
  font-weight: 400;
  border-radius: 0;
  font-size: 20px;
  color: white;
  background-color: #2f2f2f;
}
</style>