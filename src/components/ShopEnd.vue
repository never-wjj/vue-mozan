<template>
  <div class="cart-inner">
    <div class="cart-top">
      <p>
        <span class="cart-span">收银台</span>
      </p>
      <p class="cart-p Todo-1">
        <span>购物车</span>
        <span>填写订单</span>
        <span class="Todo">付款、购买成功</span>
      </p>
    </div>
    <div>
      <img src="../assets/images/cart-top_03.png" alt />
    </div>
    <div class="payment-inner shop-inner">
      <img src="../assets/afterpay1.jpg" alt />
      <div class="shop-right">
        <h3 style="border-bottom: 1.5px solid #000;padding-bottom:10px">支付成功</h3>
        <div>
          <p>订单号：123697456325</p>
          <p>成功支付：￥158</p>
        </div>
        <span>
          <router-link :to="$public+'/'">
            <span>继续逛逛</span>
          </router-link>
          <router-link to="/order">
            <span>查看订单</span>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shop-inner {
  padding: 30px 0 100px 0;
  display: flex;
  justify-content: space-between;
}
.shop-right {
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.shop-right h3 {
  position: absolute;
  left: 0%;
  top: 30%;
}
.shop-right span > a {
  padding: 10px 20px;
  background-color: #fdd900;
  cursor: pointer;
  margin-left: 10px;
}
</style>
