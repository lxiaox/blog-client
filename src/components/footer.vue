<template>
  <footer>
    <p>&copy;2020.03 liuxiaoxiao blog-share</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="less" scoped>
@import "../assets/style/base.less";
footer {
  padding: 20px;
  p {
    text-align: center;
    color: @textLighterColor;
  }
  
}
</style>