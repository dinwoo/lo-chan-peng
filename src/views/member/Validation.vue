<template lang="pug">
article.member-info
  section.form
    .title 會員驗證
    .row
      .column-1
        .input-box
          .input-title 驗證碼
          input(type="text" v-model="token")
    .btn-box
      //- Button(title='忘記密碼',type="right")
      Button(title='驗證' @click="postValidationHandler")
          


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
    return { token: "" };
  },
  computed: {
    ...mapState(["screenWidth"]),
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    ...mapActions(["postValidation"]),
    postValidationHandler() {
      if (this.token == "") {
        alert("請填寫驗證碼");
        return false;
      }

      this.postValidation(this.token)
        .then(() => {
          this.$router.push({ name: "Member" });
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
