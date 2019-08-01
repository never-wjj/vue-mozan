<template>
  <div>
    <span style="color:#fff;font-size:13px">合计：</span>
    <span class="pic">￥{{total}}</span>
    &nbsp;
    <el-button type="text" @click="dialogVisible = true">去结算</el-button>

    <el-dialog title :visible.sync="dialogVisible" width="25%">
      <span>
        <img src="../assets/images/购物车-本页登录_03.png" alt />
      </span>
      <div class="dialod-inp">
        <input type="text" placeholder="请输入账号" />
        <input type="password" placeholder="请输入密码" />
        <span>
          <input type="text" placeholder="请输入验证码" />
          <img src="../assets/images/弹框_09.png" alt />
        </span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <router-link to="/order">
          <el-button type="primary" @click="dialogVisible = false">登 录</el-button>
        </router-link>
        <p>
          <span>忘记密码？</span>
          <span>注册</span>
        </p>
        <span>
          <img src="../assets/images/denglu_16.png" alt />
          <img src="../assets/images/denglu_18.png" alt />
          <img src="../assets/images/denglu_20.png" alt />
        </span>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "dia",
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {
    name() {
      return this.data;
    },
    ...mapGetters(["total"])
  }
};
</script>



<style>
.el-dialog__body {
  text-align: center;
}
.dialod-inp {
  width: 260px;
  margin: 0 auto;
}
.dialod-inp input {
  border: 1px solid #ccc;
  width: 260px;
  height: 30px;
  margin: 10px 0;
  /* background-image: url("../assets/images/弹框_03.png"); */
  padding: 0 5px;
}
.dialod-inp span {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 10px;
}
.dialod-inp span input {
  width: 130px;
  margin: 0;
}
.dialog-footer p {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.dialog-footer > span {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #ccc;
}
.el-button--text:hover,
.el-button--text:focus {
  background-color: #fdd900;
  color: #000;
}
</style>
