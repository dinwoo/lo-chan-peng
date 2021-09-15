<template lang="pug">
article.member-info(v-if="!isLoading")
  section.form
    .title(v-html="isEdit?$t(`Member.editTitle`):$t(`Member.infoTitle`)")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.name`)}}
          input(type="text" v-model="member.name" :disabled="!isEdit" v-if="isEdit")
          p.input-txt(v-else) {{member.name}}
      //- .column-2
        .input-box
          .input-title {{$t(`Member.birthday`)}}
          input(type="date" min="1911-01-01" :max="today" v-model="member.birthday" :disabled="!isEdit" :class="{'edit':isEdit}" v-if="isEdit")
          p.input-txt(v-else) {{member.birthday}}
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.account`)}}
          //- input(type="text" v-model="member.account" disabled)
          p.input-txt {{member.account}}
      //- .column-2
      //-   .input-box
      //-     .input-title 密碼
      //-     input(type="password")
    .row
      .column-1
        .input-box
          .input-title {{$t(`Member.email`)}}
          //- input(type="text" v-model="member.email" disabled)
          p.input-txt {{member.email}}
    .btn-box
      .btn(v-if="!isEdit")
        Button(:title="$t(`Member.logout`)",type="right" @click="logoutHandler")
      .btn(v-if="!isEdit")
        router-link(:to="{name:'ForgetPassword'}")
          Button(:title="$t(`Member.editPsw`)",type="right")
      .btn.hide(v-if="isEdit")
      .btn(v-if="isEdit")
        Button(:title="$t(`Member.cancel`)",type="right" @click="isEdit=false")
      .btn
        Button(:title="isEdit?$t(`Member.send`):$t(`Member.edit`)",type="right" @click="btnHandler")
          


</template>

<script>
import { mapState, mapActions } from "vuex";
import Button from "@/components/Button.vue";

export default {
  name: "MemberInfo",
  components: {
    Button,
  },
  data() {
    return {
      isEdit: false,
    };
  },
  computed: {
    ...mapState(["isLoading", "member"]),
    today() {
      const date = new Date();
      let month =
        date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      return `${date.getFullYear()}-${month}-${date.getDate()}`;
    },
  },
  mounted() {
    this.$nextTick(() => {});
  },
  created() {
    const account = localStorage.getItem("account");
    if (!account) {
      this.$router.push({ name: "Signin" });
    } else {
      this.getMemberInfo(account)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.isEdit = false;
        })
        .catch(() => {
          console.log("fail");
        });
    }
  },
  methods: {
    ...mapActions(["getMemberInfo", "putMemberInfo"]),
    btnHandler() {
      if (!this.isEdit) {
        this.isEdit = true;
      } else {
        console.log("send");
        this.putMemberInfo({
          token: localStorage.getItem("token"),
          name: this.member.name,
          // birthday: this.member.birthday,
        })
          .then(() => {
            console.log("success");
            this.isEdit = false;
          })
          .catch(() => {
            console.log("fail");
          });
      }
    },
    logoutHandler() {
      localStorage.removeItem("account");
      localStorage.removeItem("token");
      this.$router.push({ name: "Signin" });
    },
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

+input-style

article.member-info
  section.form
    .btn-box
      display: flex
      justify-content: space-between
      .btn
        flex: 1
        margin-left: 1rem
  +rwd(768px)
    section.form
      .btn-box
        flex-wrap: wrap
        .btn
          width: 100%
          margin-left: 0
          &.hide
            display: none
</style>
