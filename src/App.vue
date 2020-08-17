<template>
  <div id="app">
    <tabbar>
      <tabbar-item path="/Home" active-color="blue"><img src="./assets/img/user.jpg" alt="" slot="item-icon"><div slot="item-text">主页</div></tabbar-item>
      <tabbar-item path="/classify"><img src="./assets/img/user.jpg" alt="" slot="item-icon"><div slot="item-text">分类</div></tabbar-item>
      <tabbar-item path="/shop" active-color="orange"><img src="./assets/img/user.jpg" alt="" slot="item-icon"><div slot="item-text">购物车</div></tabbar-item>
      <tabbar-item path="/profile"><img src="./assets/img/user.jpg" alt="" slot="item-icon"><div slot="item-text">档案</div></tabbar-item>
    </tabbar>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
  import Tabbar from "./components/Tabbar/Tabbar";
  import TabbarItem from "./components/Tabbar/TabbarItem";
  export default {
    name:'app',
    components:{
      Tabbar,TabbarItem
    },

  }
</script>

<style>
@import "assets/css/base.css";

</style>