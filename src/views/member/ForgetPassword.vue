<template lang="pug">
article.member-info
  section.form
    .title 修改密碼(忘記密碼)
    .row
      .column-1
        .input-box
          .input-title 帳號
          input(type="text" v-model="account")
    .btn-box
      Button(title='送出' @click="postPasswordTokenHandler")
          


</template>

<script>
import { mapState, mapActions } from "vuex";
import Button from "@/components/Button.vue";

export default {
  name: "Member",
  components: {
    Button,
  },
  data() {
    return { account: "" };
  },
  computed: {
    ...mapState(["screenWidth"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    ...mapActions(["postPasswordToken"]),
    postPasswordTokenHandler() {
      if (this.account == "") {
        alert("請填寫帳號");
        return false;
      }

      this.postPasswordToken(this.account)
        .then(() => {
          this.$router.push({ name: "PasswordEdit" });
        })
        .catch(() => {
          alert("傳送失敗");
        });
    },
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"
</style>
