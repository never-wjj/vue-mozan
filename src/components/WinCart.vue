<template>
  <div class="cart">
    <div class="cart-inner">
      <div class="cart-top">
        <p>
          <span class="cart-span">已成功加入购车！</span>
        </p>
      </div>
      <div>
        <img src="../assets/images/cart-top_03.png" alt />
      </div>
      <div class="win-cart">
        <div class="win-cart-3">
          <img style="width:96px;higth:96px" src="../assets/images/renwu_03.png" alt />
          <p style="width:230px;font-size:14px;padding-left:20px">龙之谷六周年限定礼包大Boss兵龙款男士T恤</p>
          <ul style="padding-left:20px">
            <li>款式：iphone 5</li>
            <li>尺码：{{$store.state.sizeTo}}</li>
            <li>数量：x1</li>
          </ul>
        </div>
        <div>
          <router-link to="/">
            <span class="win-cart-to">返回</span>
          </router-link>
          <router-link to="/cart">
            <span class="win-bth">去购物车结算</span>
          </router-link>
        </div>
      </div>
      <div style="padding:0 50px">
        <img src="../assets/images/加入购物车_22.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "win",
  computed: {}
};
</script>

<style>
.win-cart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px;
  padding: 8px 0;
  border-top: 2px solid #b8beca;
  border-bottom: 2px solid #b8beca;
}
.win-cart-3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.win-cart-3 ul {
  color: #6f7277;
  font-size: 14px;
  border-left: 2px solid #fdd900;
}
.win-cart-to {
  padding: 10px 40px;
  background-color: #2b2e33;
  color: #fff;
  margin-right: 6px;
}
.win-bth {
  padding: 10px 40px;
  background-color: #fdd900;
}
</style>
