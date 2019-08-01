<template>
  <div class="cart">
    <div class="cart-inner">
      <div class="cart-top">
        <p>
          <span class="cart-span">填写订单</span>
        </p>
        <p class="cart-p Todo-1">
          <span>购物车</span>
          <span class="Todo">填写订单</span>
          <span>付款、购买成功</span>
        </p>
      </div>
      <div>
        <img src="../assets/images/cart-top_03.png" alt />
      </div>
      <div class="order-inner">
        <div class="order-h4">
          <h4>收货地址</h4>
          <h4 @click="addressShow=true" style="cursor: pointer;">新增地址</h4>
        </div>
        <div class="order-sec">
          <ul>
            <li>
              <img src="../assets/images/提交订单111_03.png" alt /> 买买提 艾力
            </li>
            <li>
              <img src="../assets/images/提交订单111_06.png" alt />河北省 秦皇岛市 海港区
            </li>
            <li>
              <img src="../assets/images/提交订单111_08.png" alt />159****5186
            </li>
          </ul>
          <div>
            <span>设置默认</span>
            <span>
              <img src="../assets/images/dzhi123_08.png" alt /> 编辑
            </span>
            <el-tooltip class="item" effect="dark" content="确定删除 | 不删除" placement="bottom-end">
              <span>
                <img src="../assets/images/dzhi123_11.png" alt /> 删除
              </span>
            </el-tooltip>
          </div>
        </div>
        <hr />
        <div class="order-sec">
          <ul>
            <li>
              <img src="../assets/images/提交订单111_03.png" alt /> 某某某
            </li>
            <li>
              <img src="../assets/images/提交订单111_06.png" alt />河北省 唐山市 丰润区 大悦新城 2号楼 4栋 1202室
            </li>
            <li>
              <img src="../assets/images/提交订单111_08.png" alt />134****0521
            </li>
          </ul>
          <div>
            <span>设置默认</span>
            <span>
              <img src="../assets/images/dzhi123_08.png" alt /> 编辑
            </span>

            <el-tooltip class="item" effect="dark" content="确定删除 | 不删除" placement="bottom-end">
              <span>
                <img src="../assets/images/dzhi123_11.png" alt /> 删除
              </span>
            </el-tooltip>
          </div>
        </div>
        <p>显示更多</p>
        <div>
          <p class="order-xian">
            <span style=" font-weight: bold">商品信息</span>
            <span style="font-size:13px">返回购物车</span>
          </p>
          <div>
            <div class="win-cart" style="border:0">
              <div class="win-cart-3">
                <img style="width:96px;higth:96px" src="../assets/images/renwu_03.png" alt />
                <p style="width:230px;font-size:14px;padding-left:20px">龙之谷六周年限定礼包大Boss兵龙款男士T恤</p>
                <ul style="padding-left:20px">
                  <li>款式：iphone 5</li>
                  <li>尺码：XL</li>
                </ul>
              </div>
              <div class="order-num">
                <span>￥ 79</span>
                <span>X 1</span>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div class="win-cart" style="border:0">
              <div class="win-cart-3">
                <img style="width:96px;higth:96px" src="../assets/images/renwu_03.png" alt />
                <p style="width:230px;font-size:14px;padding-left:20px">龙之谷六周年限定礼包大Boss兵龙款男士T恤</p>
                <ul style="padding-left:20px">
                  <li>款式：iphone 5</li>
                  <li>尺码：XL</li>
                </ul>
              </div>
              <div class="order-num">
                <span>￥ 79</span>
                <span>X 1</span>
              </div>
            </div>
          </div>
          <p style=" border-bottom: 1.5px solid #000;"></p>
          <div class="order-pins">
            <h4>支付方式</h4>
            <span class="order-bor">在线支付</span>
            <h4>物流方式</h4>
            <span class="order-bor">普通快递</span>
            <h4>发票信息</h4>
            <span class="order-fff">不开发票</span>
            <span class="order-bor">开发票</span>
            <input style="height:40px;width:130px" type="text" placeholder="请输入个人/单位名称" />
            <span class="order-cun">保存</span>
          </div>
          <hr />
          <p>
            <span style=" font-weight: bold">备注</span>
            <span style="font-weight: bold;float:right">清算</span>
          </p>
          <div class="order-foot">
            <input type="text" class="beizhu" />

            <div class="qing-suan">
              <ul>
                <li>
                  2 件商品，总金额:
                  <span>￥79.00</span>
                </li>
                <li>
                  优惠金额:
                  <span>￥-0.00</span>
                </li>
                <li>
                  运费:
                  <span>￥0.00</span>
                </li>
                <li>
                  应付金额:
                  <span style="color:red;font-size:20px">￥168</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="order-tijiao-div">
            <router-link to="payment">
              <span class="order-tijiao">提交订单</span>
            </router-link>
          </div>
        </div>
      </div>
      <div v-show="addressShow" class="new-address">
        <div class="address-box">
          <h1>
            <span>新增地址</span>
            <span @click="addressShow=false" style="cursor: pointer;">×</span>
          </h1>
          <div class="address-info">
            <div>
              <span>
                <span class="form-txt">
                  <span>*收货人</span>
                  <!-- <span>请填写收货人！</span> -->
                </span>
                <input class="people" type="text" v-model=" user_name" />
              </span>
              <span>
                <span class="form-txt">
                  <span>*联系电话</span>
                  <!-- <span>填写的手机号格式错误</span> -->
                </span>
                <input class="phone-txt" type="text" v-model=" user_phoneNum" />
              </span>
            </div>
            <div>
              <span>*所在地区</span>
              <span>请填写完整的所在地区</span>
            </div>
            <div class="linkage">
              <el-select v-model="sheng" @change="choseProvince" placeholder="省级地区">
                <el-option
                  v-for="item in province"
                  :key="item.id"
                  :label="item.value"
                  :value="item.id"
                ></el-option>
              </el-select>
              <el-select v-model="shi" @change="choseCity" placeholder="市级地区">
                <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
              </el-select>
              <el-select v-model="qu" @change="choseBlock" placeholder="区级地区">
                <el-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id"></el-option>
              </el-select>
            </div>

            <div class="width-100">
              <span>
                <span class="form-txt">
                  <span>*收货人</span>
                  <!-- <span>请填写收货人！</span> -->
                </span>
                <input type="text" />
              </span>
            </div>
            <div>
              <span>
                <span class="form-txt">
                  <span>地址别名</span>
                </span>
                <input class="address" type="text" />
              </span>
              <span class="other-name">
                <span class="form-txt">
                  <span>常用别名</span>
                </span>
                <span class="df">
                  <span class="btn">家</span>
                  <span class="btn">公司</span>
                  <span class="btn">父母家</span>
                </span>
              </span>
            </div>
          </div>
          <div class="save-address">
            <div @click.stop="change">
              <span class="df">
                <span v-if="!defaultChecked" class="checkbox"></span>
                <span v-else class="check">√</span>
              </span>
              <span style="cursor: pointer;">设为默认地址</span>
            </div>
            <span @click="addAddress" class="save" style="cursor: pointer;">保存地址</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "win",
  data() {
    return {
      border: "",
      remove: 1,
      defaultChecked: false,
      addressShow: false,
      province: "",
      sheng: "",
      shi: "",
      shi1: [],
      qu: "",
      qu1: [],
      city: "",
      block: "",
      user_name: "",

      user_phoneNum: ""
    };
  },
  methods: {
    choseProvince: function(e) {
      for (var index2 in this.province) {
        if (e === this.province[index2].id) {
          console.log(this.province[index2].id); //你选择的省级编码
          console.log(this.province[index2].value); //省级编码 对应的汉字
          this.shi1 = this.province[index2].children;
          this.shi = this.province[index2].children[0].value;
          this.qu1 = this.province[index2].children[0].children;
          this.qu = this.province[index2].children[0].children[0].value;
          this.E = this.qu1[0].id;
        }
      }
    },
    // 选市
    choseCity: function(e) {
      for (var index3 in this.city) {
        if (e === this.city[index3].id) {
          this.qu1 = this.city[index3].children;
          this.qu = this.city[index3].children[0].value;
          this.E = this.qu1[0].id;
          // console.log(this.E)
        }
      }
    },
    // 选区
    choseBlock: function(e) {
      this.E = e;
      // console.log(this.E)
    },
    addAddress() {
      if (this.user_name && this.user_phoneNum) {
        this.$store.state.users.push({
          user_name: this.user_name,
          user_address: "秦皇岛市海港区秦海璐84号",
          user_phoneNum: this.user_phoneNum,
          active_address: this.defaultChecked,
          user_id: 899999,
          byid: [1],
          bynum: {
            1: 1
          }
        });
        this.addressShow = false;
      } else {
        alert("请输入正确的信息");
      }
    },
    change() {
      console.log(11);

      this.$store.commit("changeAddress", this.defaultChecked);
      this.defaultChecked = !this.defaultChecked;
    }
  }
};
</script>

<style>
.new-address {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
}
.new-address .address-box {
  background-color: #fff;
  width: 700px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
}
.new-address .address-box h1 {
  margin: 0;
  font-size: 18px;
  border-bottom: 3px solid #000;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.new-address .address-box > .address-info > div {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding-top: 20px;
}
.new-address .address-box > .address-info > div > span {
  display: flex;
  flex-direction: column;
}
.new-address .address-box > .address-info > div > span .form-txt {
  display: flex;
  justify-content: space-between;
}
.new-address .address-box input {
  outline: none;
  height: 26px;
}
.new-address .address-box > .address-info > div > span > input.people {
  width: 210px;
}
.new-address .address-box > .address-info > div > span > input.phone-txt {
  width: 432px;
}
.new-address .address-box > .address-info > div > .other-name {
  width: 210px;
  display: flex;
  /* justify-content: space-between; */
}
.new-address .address-box > .address-info > div > .other-name > span {
  display: flex;
  justify-content: space-between;
}
.new-address
  .address-box
  > .address-info
  > div
  > .other-name
  > span
  > span.btn {
  width: 68px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border: 1px solid #babec9;
}
.new-address .address-box > .address-info > div > span > input.address {
  width: 430px;
}

.new-address .address-box > .address-info > div.width-100,
.new-address .address-box > .address-info > div.width-100 > span {
  width: 100%;
}

.new-address .address-box > .save-address {
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  align-items: center;
}
.new-address .address-box > .save-address > div {
  font-size: 12px;
  display: flex;
}
.new-address .address-box > .save-address > .save {
  width: 210px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 18px;
  background-color: #fdd900;
}

.Todo-1 .Todo {
  border-bottom: 2px solid #000;
  font-weight: bold;
}
.order-inner,
.payment-inner {
  margin: 0 50px;
}
.order-inner > p {
  margin-bottom: 0;
  line-height: 50px;
  background-image: url("../assets/images/xianshi_19.png");
  text-align: center;
  font-weight: bold;
}
.order-h4 {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
}
.order-sec {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  padding: 3px;
  border: 2px solid #fff;
}
.order-sec div span {
  padding-left: 40px;
}

.order-sec.active {
  border: 2px solid #fdd900;
}
/* .order-sec:visited {
  border: 2px solid #fdd900;
} */
.order-xian {
  display: flex;

  padding: 10px;
  border-bottom: 1.5px solid #000;
  justify-content: space-between;
}
.order-num span {
  margin-left: 50px;
}
.order-fff {
  padding: 8px 18px;
  border: 2px solid #ccc;
  margin: 0 20px 0 10px;
}
.order-bor {
  padding: 8px 18px;
  border: 2px solid #fdd900;
  margin: 0 20px 0 10px;
}
.order-pins {
  display: flex;
  align-items: center;
}
.order-cun {
  background-color: #fdd900;
  padding: 10px 6px;
  cursor: pointer;
}
.order-foot {
  display: flex;
  justify-content: space-between;
}
.beizhu {
  width: 30%;
  border: 1px solid #ccc;
  border-top: 2px solid #000;
  height: 80px;
}
.qing-suan {
  border-top: 2px solid #000;
  width: 65%;
}
.qing-suan ul {
  float: right;
  width: 300px;
  font-size: 14px;
}
.qing-suan ul span {
  float: right;
}
.order-tijiao-div {
  padding: 60px 0 80px 0;
}
.order-tijiao-div .order-tijiao {
  padding: 10px 20px;
  background-color: #fdd900;
  float: right;
  color: #000;
}
.item {
}
</style>
