<template>
  <div>
    <header>
      <div class="hea-inner">
        <div>
          <img class="app-img" src="./assets/images/1231.png" alt />
        </div>
        <div>
          <img src="./assets/logo.png" alt />
        </div>
        <div>
          <span>
            <img class="app-img" src="./assets/images/1232.png" alt />登录/注册
          </span>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <Foot />
  </div>
</template>

<script>
import Foot from "./components/Foot";
export default {
  name: "app",
  components: {
    Foot
  }
};
</script>

<style>
header {
  background-color: #2b2e33;
  height: 80px;
  color: #ccc;
}
.hea-inner {
  width: 65%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app-img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
