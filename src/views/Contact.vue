<template lang="pug">
article.contact-info
  section.banner
    BannerPicture(:bannerLink="bannerLink" :isLink="true")
    //- figure.contact-icon
    //-   img(src="@/assets/images/contact-icon.png")
  section.form
    .title {{$t(`Contact.title`)}}
    .row
      .column-2
        .input-box
          .input-title {{$t(`Contact.name`)}}
          input(type="text" v-model="name")
      .column-2
        .input-box
          .input-title {{$t(`Contact.phone`)}}
          input(type="text" v-model="phone")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Contact.email`)}}
          input(type="text" v-model="email")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Contact.content`)}}
          textarea(v-model="content")
    .btn-box
      Button(:title='$t(`Contact.send`)',type="right" @click="postEmailHandler")

</template>

<script>
import { mapState, mapActions } from "vuex";
import BannerPicture from "@/components/BannerPicture";
import Button from "@/components/Button.vue";
import mixins from "@/mixins/index.js";

export default {
  name: "Contact",
  components: {
    BannerPicture,
    Button
  },
  mixins: [mixins],
  data() {
    return {
      bannerLink: {
        desktop:
          "https://mizusoimg.sgp1.cdn.digitaloceanspaces.com/lochanpeng/banner/2024/3/%E5%9C%96%E7%89%87%E8%AA%BF%E6%95%B4-02.jpg",
        mobile:
          "https://mizusoimg.sgp1.cdn.digitaloceanspaces.com/lochanpeng/banner/2024/3/%E5%9C%96%E7%89%87%E8%AA%BF%E6%95%B4-02.jpg"
      },
      name: "",
      phone: "",
      email: "",
      content: ""
    };
  },
  computed: {
    ...mapState(["screenWidth"])
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    ...mapActions(["postEmail"]),
    postEmailHandler() {
      if (this.name == "") {
        alert("請填寫姓名");
        return false;
      } else if (!this.verifyPhone(this.phone)) {
        alert("電話錯誤");
        return false;
      } else if (!this.verifyEmail(this.email)) {
        alert("Email錯誤");
        return false;
      } else if (this.content == "") {
        alert("請填寫內容");
        return false;
      }

      this.postEmail({
        name: this.name,
        phone: this.phone,
        email: this.email,
        content: this.content
      })
        .then(() => {
          alert("傳送成功");
          this.name = "";
          this.phone = "";
          this.email = "";
          this.content = "";
        })
        .catch(() => {
          alert("傳送失敗");
        });
    }
  },
  watch: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

+input-style

article.contact-info
  // section.banner
  //   padding: 150px 0
  //   .contact-icon
  //     width: 465px
  //     margin: auto
  section.form
    width: 100%
    max-width: 960px
    padding: 0 15px
    margin: auto
    box-sizing: border-box
    position: relative
    .title
      font-size: 1.8rem
      letter-spacing: 4px
      color: $gray-005
      position: absolute
      left: -200px
    .column-1
      margin-bottom: 1rem
    .column-2
      width: 46%
      margin-bottom: 1rem
      +dib
      & + .column-2
        margin-left: 8%
  +rwd(1440px)
    section.form
      .title
        margin-bottom: 2rem
        font-size: 1.6rem
        position: relative
        left: 0px
        border-bottom: 1px solid $gray-005
  +rwd(768px)
    // section.banner
    //   padding: 15vw 0
    //   .contact-icon
    //     width: 35vw
    section.form
      .title
      .column-1
        margin-bottom: 1rem
      .column-2
        width: 100%
        & + .column-2
          margin-left: 0%
</style>
