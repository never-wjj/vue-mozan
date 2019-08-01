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
    <div class="payment-inner">
      <h4>订单提交成功，请您尽快付款！</h4>
      <p style="border-bottom: 1.5px solid #000;padding-bottom:15px">
        <span>请您在提交订单后24小时内完成支付，否则订单自动消失</span>
        <span style="float: right;">
          应付金额：
          <span style="color:red;font-size:20px">￥168.00</span>
        </span>
      </p>
      <div class="pay-sec1">
        <h4>订单号： 12369874521521</h4>
        <div>
          <span>
            <img src="../assets/images/提交订单111_03.png" alt /> 某某某&nbsp;
            <img src="../assets/images/提交订单111_08.png" alt /> 134****0521
          </span>
          <p>
            <img src="../assets/images/提交订单111_06.png" alt /> 河北省 唐山市 丰润区 大悦新城 2号楼 4栋 1202室
          </p>
        </div>
      </div>
      <hr />
      <div style="border-bottom: 1.5px solid #000" class="pay-sea2">
        <h4>选择付款方式：</h4>
        <img src="../assets/pay1.jpg" alt />
        <img src="../assets/pay2.jpg" alt />
      </div>
      <div class="order-tijiao-div">
        <el-button type="text" @click="dialogVisible = true">
          <span class="payment-fu">付款</span>
        </el-button>
        <el-dialog title :visible.sync="dialogVisible" width="30%">
          <div class="pay-tian">
            <p>请您在新打开的网上银行页面进行支付</p>
            <p>支付完成前请不要关闭该窗口</p>
            <el-button @click="dialogVisible = false">支付遇到问题</el-button>
            <router-link to="/shopend">
              <el-button type="primary" @click="dialogVisible = false">已完成支付</el-button>
            </router-link>
          </div>
          <p>
            <a href="#">选择其他方式支付</a>
          </p>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payment",
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>

<style>
.payment-inner p {
  font-size: 14px;
}
.pay-sec1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.pay-sec1 span {
  display: flex;
  justify-content: flex-end;
}
.pay-sea2 {
  display: flex;
  align-items: center;
}
.pay-sea2 img {
  display: block;
  padding: 4px 10px;
  margin-right: 10px;
  border: 2px solid #ccc;
}
.pay-sea2 img.active {
  border: 2px solid #fdd900;
}
.order-tijiao {
  padding: 0;
}
.el-button--primary {
  background-color: #000;
  font-weight: bold;
  color: #fff;
}
.pay-tian {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 20px 0;
}
.pay-tian p {
  font-size: 13px;
}
</style>
