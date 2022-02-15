<style lang="less" scoped>
.test {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  .txt-message {
    position: relative;
    margin: 0 auto;
    width: fit-content;
    line-height: 0.32rem;
    letter-spacing: 0;
    font-size: 0.24rem;
    font-weight: bold;
    text-align: center;
    color: #000000;
  }
}
</style>

<template>
  <section class="test">
    <div class="txt-message">This is a test page!</div>
  </section>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {};
  },
  created() {
    document.title = "Test";
  },
  methods: {}
};
</script>
