<template>
  <div class="cart">
    <div class="cart-inner">
      <div class="cart-top">
        <p>
          <span class="cart-span">购物车</span>
          <span>[ {{carts.length}} 件]</span>
        </p>
        <p class="cart-p">
          <span class="Todo">购物车</span>

          <span>填写订单</span>
          <span>付款、购买成功</span>
        </p>
      </div>
      <div>
        <img src="../assets/images/cart-top_03.png" alt />
      </div>
      <div class="cart-hear">
        <p>
          <span>
            <input type="checkbox" class="checkbox" id="all" />
            <label for="all" :class="checkedall?'checked-btn text':'text'" @click="allRedbtn">
              <span v-show="checkedall">√</span>
            </label>
            <span>全选</span>
            <span>商品</span>
          </span>
          <span class="cart-hear-span">
            <span>单价</span>
            <span>数量</span>
            <span>小计</span>
            <span>操作</span>
          </span>
        </p>
      </div>
      <div style="padding:0 50px" class="carts-pins">
        <ul v-if="carts.length">
          <li v-for="cart in carts" :key="cart.id">
            <div class="cart-gouwu">
              <input type="checkbox" class="checkbox" :checked="cart.checked" :id="cart.id" />
              <label
                :for="cart.id"
                :class="cart.checked?'checked-btn text':'text'"
                @click="allBtn({id:cart.id})"
              >
                <span v-show="cart.checked">√</span>
              </label>
              <img style="width:96px;higth:96px" src="../assets/images/renwu_03.png" alt />
              <p style="width:230px;font-size:14px;">{{cart.title}}</p>
            </div>
            <div class="cart-num">
              <span>{{cart.price}}</span>
              <span>
                <span class="bth-left" @click="cdcart(cart.id)">+</span>
                <span style="padding:0 10px">{{cart.count}}</span>
                <span class="bth-right" @click="sdcart(cart.id)">-</span>
              </span>
              <span @click="$store.commit('DelCart')">{{(cart.subtotal*cart.num).toFixed(2)}}</span>
              <el-tooltip class="item" effect="dark" content="确定删除 | 不删除" placement="bottom-end">
                <span @click="$store.commit('tooltipShow',{id:cart.id})" style="cursor: pointer;">x</span>
              </el-tooltip>
            </div>
          </li>
        </ul>
      </div>
      <div style="margin:50px 50px 0 50px" class="cart-foot">
        <div class="cart-foot-top">
          <input type="checkbox" class="checkbox" id="cc" />
          <label
            for="all"
            :class="checkedall?'checked-btn text':'text'"
            @click="allRedbtn"
            style="margin: 0 10px"
          >
            <span v-show="checkedall">√</span>
          </label>
          <span>全选</span>
          <img style="margin: 0 6px" src="../assets/images/cart-foot_06.png" alt />
          <span>删除</span>
          <img style="margin: 0 6px" src="../assets/images/cart-foot_03.png" alt />
          <span>转到愿望单</span>
          <span>|</span>
          <span>
            共
            <span>{{carts.length}}</span> 件商品，已选择
            <span>{{goodsNum}}</span> 件
          </span>
        </div>
        <div class="cart-bot">
          <Dialog />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dialog from "./Dialog";
export default {
  name: "cart",
  data() {
    return {
      visible: false
    };
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    users() {
      return this.$store.state.users;
    },
    tatol() {
      return this.$store.getters.tatol.toFixed(2);
    },
    goodsNum() {
      return this.$store.getters.goodsNum;
    },
    allRed() {
      return this.$store.state.allRed;
    },
    checkedall() {
      // console.log(this.$store);
      return this.$store.getters.checkedall;
    }
  },
  components: {
    Dialog
  },
  methods: {
    addCart() {
      console.log("123");
    },
    cdcart(id) {
      return this.$store.commit("incdCart", id);
    },
    sdcart(id) {
      return this.$store.commit("insdcart", id);
    },
    allBtn(id) {
      return this.$store.commit("inallBtn", id);
    },
    allRedbtn() {
      return this.$store.commit("inallRedbtn");
    }

    // delChecked() {
    //   this.$store.commit("delChecked");
    //   this.tooltip = !this.tooltip;
    //   console.log(this.tooltip);
    // }
  }
};
</script>

<style>
.Todo {
  border-bottom: 2px solid #000;
  font-weight: bold;
}
.cart-top {
  height: 20px;
  padding: 24px 50px;
  background-color: #fdd900;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart-span {
  padding-left: 20px;
  font-size: 30px;
  border-left: 4px solid #000;
}
.cart-inner {
  background-color: #fff;
}
.cart-p span {
  margin-left: 15px;
  border-bottom: 1.5px solid #000;
}
.cart-hear {
  padding: 0 50px;
}
.cart-hear p {
  margin: 0 0 10px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.cart-hear p span > span {
  margin-left: 10px;
}
.cart-hear p .cart-hear-span span {
  margin-left: 100px;
}
.checkbox {
  display: none;
}
.text {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 20px;
  float: left;
}

.checked-btn {
  background-color: #fdd900;
}

.cart-foot {
  /* line-height: 48px; */
  display: flex;
  background-color: #2b2e33;
  justify-content: space-between;
  align-items: center;
}
.cart-foot-top {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #fff;
}
.cart-foot-top > span {
  margin-right: 20px;
}
.cart-bot .pic {
  font-size: 26px;
  color: #fdd900;
  line-height: 50px;
}
.carts-pins > ul > li {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.cart-gouwu {
  display: flex;
  align-items: center;
  width: 440px;
  justify-content: space-around;
}
.cart-num {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
}
.bth-left,
.bth-right {
  padding: 5px 8px;
  border: 1px solid #000;
  cursor: pointer;
}
.el-button--text {
  padding: 16px 72px;
  display: block;
  float: right;
  border-radius: 0;
  background-color: #fdd900;
  color: #000;
  font-size: 18px;
}
.el-button--text:hover {
  background-color: #fdd900;
  color: #000;
}
</style>
