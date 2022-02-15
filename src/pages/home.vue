<style lang="less" scoped>
.home {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  .header {
    position: relative;
    margin: 0 auto;
    width: 100%;
    .background {
      display: block;
      position: relative;
      margin: 0 auto;
      width: 100%;
    }
    .btn-rule {
      display: block;
      position: absolute;
      margin: 0;
      top: 0;
      right: 0;
      width: 2rem;
      height: 1rem;
    }
  }
}
</style>

<template>
  <section class="home">
    <div class="header">
      <img class="background" :src="require('@assets/common/img_logo.png')" />
      <a class="btn-rule" href="javascript:;" @click="OnRuleClick()"></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {
    document.title = "Home";
  },
  methods: {
    OnRuleClick() {
      console.log("OnRuleClick!");
      this.$router.push({ name: "Test" });
    }
  }
};
</script>
