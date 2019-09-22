<template>
  <div :style="{backgroundColor:'white'}">
    <div class="black--text">
      <h1 class="xd-about-text">ABOUT</h1>
      <v-img :src="require('~/assets/about_img_top1.svg')" class="xd-imgtop1" />
      <p class="xd-text-top1">{{text_top1}}</p>
      <p class="xd-text-top2">{{text_top2}}</p>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      :style="{transform:'translateY(45px)'}"
    >
      <path
        fill="#000000"
        fill-opacity="1"
        d="M0,192L120,170.7C240,149,480,107,720,96C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>
    <div :style="{backgroundColor:'black',paddingTop:'91.5px',marginTop:'5px',height: '900px'}">
      <div>
        <v-img :src="require('~/assets/web_developer.svg')" class="xd-img-web-developer" />
      </div>
      <div class="pl-5">
        <div class="xd-ori-header">{{ori_header}}</div>
        <div class="xd-ori-title">{{ori_title}}</div>
        <div :style="{height:'249px',width:'304px'}">
          <p :style="{fontWeight:'100'}">{{ori_description}}</p>
        </div>
      </div>
      <div class="pl-5">
        <div class="xd-ori-header">{{dani_header}}</div>
        <div class="xd-ori-title">{{dani_title}}</div>
        <div :style="{height:'249px',width:'304px'}">
          <p :style="{fontWeight:'100'}">{{dani_description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text_top1:
        "We are a team of web developer & digital designer from Tel Aviv, Israel. We are passionate about making unique designs that will make your brand stand out in the new digital world.",
      text_top2:
        "We believe in digital experiences for your clients and we would be happy to make them for you.",
      ori_header: "ORI LERMAN",
      ori_title: "TECH LEAD",
      ori_description:
        "ori does all our development, from landing pages to creating fully featurd mobile-apps, MTA Computer Science Graduate and Exprienced Full-Stack developer with a passion for creating custom solutions to fit your needs, ori pushes our development stack into being more versatile, modern, future-proof.",
      dani_header: "DANIELA KROL",
      dani_title: "DIGITAL DESIGNER",
      dani_description:
        "Daniela does the art & design. After being the graphic and social media designer for businesses such as the Pasaz Club and Beit Hapsanter, Daniela got into the UX&UI world. Now she can design (or re-design) your new website, and make it full of style, well designed and user friendly."
    };
  }
};
</script>

<style scoped>
.xd-about-text {
  position: relative;
  width: 108px;
  height: 46px;
  top: 46px;
  left: 290px;
  /* margin-top: 35px; */
  margin-bottom: 35px;
  transform: matrix(0, 1, -1, 0, 0, 0);
  /* margin-left: 290.5px; */
  font: Bold 30px/40px Segoe UI;
  letter-spacing: -0.6px;
  color: white;
  -webkit-text-stroke: 1.3px black;
  opacity: 1;
}
.xd-imgtop1 {
  width: 315px;
  height: 281px;
  margin-left: 29.91px;
  opacity: 1;
}
.xd-text-top1 {
  margin-left: 30px;
  width: 285px;
  height: 150px;
  text-align: left;
  font: Semilight 20px/27px Segoe UI;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
}
.xd-text-top2 {
  margin-left: 162px;
  width: 165px;
  height: 145px;
  text-align: left;
  font: Semilight 20px/27px Segoe UI;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
}
.xd-img-web-developer {
  width: 304px;
  height: 213px;
  margin-left: 35px;
  opacity: 1;
}

.xd-ori-header {
  height: 27.5px;
  font-size: 23px;
  text-align: left;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
}
.xd-ori-title {
  width: 152px;
  height: 27.5px;
  font-size: 15px;
  text-align: left;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
}
</style>