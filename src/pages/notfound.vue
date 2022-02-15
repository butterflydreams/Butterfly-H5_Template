<style lang="less" scoped>
.notfound {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  .wrapper {
    position: absolute;
    margin: auto;
    top: 40%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    width: 100%;
    .txt-title {
      position: relative;
      margin: 0 auto;
      line-height: 0.92rem;
      letter-spacing: 0;
      font-size: 0.9rem;
      font-weight: bold;
      text-align: center;
      color: #000000;
    }
    .txt-subtitle {
      position: relative;
      margin: 0 auto;
      line-height: 0.6rem;
      letter-spacing: 0;
      font-size: 0.5rem;
      font-weight: bold;
      text-align: center;
      color: #000000;
    }
    .txt-content {
      position: relative;
      margin: 0 auto;
      line-height: 0.32rem;
      letter-spacing: 0;
      font-size: 0.24rem;
      font-weight: normal;
      text-align: center;
      color: #747474;
    }
  }
}
</style>

<template>
  <section class="notfound">
    <div class="wrapper">
      <div class="txt-title">404</div>
      <div class="txt-subtitle">Oops! Page not found.</div>
      <div class="txt-content">
        This page no longer exists or was moved to another location.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {};
  },
  created() {
    document.title = "NotFound";
  },
  methods: {}
};
</script>
