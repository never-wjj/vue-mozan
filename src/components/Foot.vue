<template>
  <footer>
    <div class="foot-inner">
      <div>
        <h3>帮助信息</h3>
        <div class="in-1">
          <ul>
            <li>
              <img src="../assets/images/3.png" alt /> 购物指南
            </li>
            <li>
              <img src="../assets/images/13.png" alt />支付方式
            </li>
            <li>
              <img src="../assets/images/19.png" alt />配送方式
            </li>
            <li>
              <img src="../assets/images/23.png" alt />售后服务
            </li>
          </ul>
          <ul>
            <li>
              <img src="../assets/images/6.png" alt />服务中心
            </li>
            <li>
              <img src="../assets/images/15.png" alt />关于我们
            </li>
            <li>
              <img src="../assets/images/20.png" alt />免责条款
            </li>
            <li>
              <img src="../assets/images/24.png" alt />友情链接
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3>关注我们</h3>
        <div>
          <img src="../assets/商品详情页_全额预售_06.png" alt />
        </div>
      </div>
      <div class="in-3">
        <h3>客服热线</h3>
        <div>
          <img src="../assets/images/09.png" alt />
          <div>
            <b>400 133 5353</b>
            <p>[周一至周五：6.00-18.00]</p>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-bott">
      <div class="foot-bott-inner">
        <img style="height:60px" src="../assets/logo.png" alt />
        <div>
          <p>北京开普勒科技有限公司@版权所有 Copyright 2015-2025 Morethen.cc All right reserved</p>
          <span style="float:right">地址：北京市朝阳区建国路93号院4号楼4层</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "foot"
};
</script>

<style>
footer {
  background-color: #000;
  color: #fff;
}
.foot-inner {
  width: 65%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  padding: 30px 10px;
}
.in-1 {
  display: flex;
}
.in-1 ul {
  padding-left: 0px;
  margin: 0;
}
.in-1 li {
  padding: 4px 8px;

  display: flex;
}
.in-1 li > img {
  width: 20px;
  height: 20px;
  padding-right: 6px;
}
.in-3 {
  width: 250px;
}
.in-3 img {
  float: left;
}
.foot-bott {
  background-color: #2b2e33;
}
.foot-bott-inner {
  width: 65%;
  margin: 0 auto;
}
.foot-bott-inner div {
  float: right;
  font-size: 12px;
  color: #5e6166;
}
</style>
