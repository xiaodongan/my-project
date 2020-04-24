<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
  .navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  .navbar .left{
    width: 60px;
    /*background: #f00;*/
  }
  .navbar .right{
    width: 60px;
    /*background: #00f;*/
  }
  .navbar .center{
    flex: 1;
    /*background: #0f0;*/
  }

</style>
