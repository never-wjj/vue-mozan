import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
//创建store
const store = new Vuex.Store({
  state: {
    numTo: 1,
    typeTo: null,
    sizeTo: null,
    allRed: false,
    cartlist: [],
    users: [
      {
        user_name: "liu",
        user_address: "秦皇岛市海港区秦海璐84号",
        user_phoneNum: "123456",
        defaultChecked: "11",
        user_id: 899999,
        byid: [1],
        bynum: {
          1: 1
        }
      }
    ],
    carts: [
      {
        id: "1",
        checkbox: "23",
        imgsrc:
          "https://img.alicdn.com/imgextra/i4/110839532/O1CN01O4Mumz2KHhmszTAgY_!!0-saturn_solar.jpg_220x220.jpg_.webp",
        title: "龙之谷六周年限定礼包大Boss兵龙款男士T恤",
        price: 88,
        kuan: "iphone 5",
        chicun: " XL",
        num: "1",
        subtotal: "88",
        checked: false,
        count: 1,
        tooltip: false
      },
      {
        id: "2",
        checkbox: "24",
        title: "龙之谷六周年限定礼包大Boss兵龙款男士T恤",
        price: 88,
        kuan: "iphone 5",
        chicun: " XL",
        num: "1",
        subtotal: "88",
        checked: false,
        count: 1,
        tooltip: false
      },
      {
        id: "3",
        checkbox: "25",
        title: "龙之谷六周年限定礼包大Boss兵龙款男士T恤",
        price: 88,
        kuan: "iphone 5",
        chicun: " XL",
        num: "1",
        subtotal: "88",
        checked: false,
        count: 1,
        tooltip: false
      },
      {
        id: "4",
        checkbox: "26",
        title: "龙之谷六周年限定礼包大Boss兵龙款男士T恤",
        price: 88,
        kuan: "iphone 5",
        chicun: " XL",
        num: "1",
        subtotal: "60",
        checked: false,
        count: 1,
        tooltip: false
      }
    ],
    isActive: false,
    count: "",
    activeIndex: "",
    info: [
      {
        id: "12",
        chi: "XXS",
        isActive: false
      },
      {
        id: "123",
        chi: "XS",
        isActive: false
      },
      {
        id: "124",
        chi: "S",
        isActive: false
      },
      {
        id: "125",
        chi: "M",
        isActive: false
      },
      {
        id: "126",
        chi: "L",
        isActive: false
      },
      {
        id: "127",
        chi: "XL",
        isActive: false
      },
      {
        id: "128",
        chi: "XXL",
        isActive: false
      }
    ],
    kuan: [
      {
        id: "85",
        kuanshi: "iphone 5",
        isActive: false
      },
      {
        id: "856",
        kuanshi: "iphone 6",
        isActive: false
      },
      {
        id: "855",
        kuanshi: "iphone 6+",
        isActive: false
      }
    ]
  },
  //mutations 修改state的方法
  mutations: {
    tooltipShow(state, payload) {
      console.log(payload.id);
      state.carts = state.carts.filter(item => item.id != payload.id);
    },
    getCarts(state, carts) {
      state.carts = carts;
    },
    intype(state, payload) {
      state.typeTo = state.kuan.find(item => item.id === payload.id).kuanshi;
      if (state.kuan.find(item => item.isActive === true)) {
        state.kuan.find(item => item.isActive === true).isActive = false;
      }
      state.kuan.find(
        item => item.id === payload.id
      ).isActive = !state.kuan.find(item => item.id === payload.id).isActive;
    },

    insize(state, payload) {
      state.sizeTo = state.info.find(item => item.id === payload.id).chi;
      if (state.info.find(item => item.isActive === true)) {
        state.info.find(item => item.isActive === true).isActive = false;
      }
      state.info.find(
        item => item.id === payload.id
      ).isActive = !state.info.find(item => item.id === payload.id).isActive;
    },
    incdCart(state, id) {
      state.carts.find(item => item.id === id).count++;
    },
    insdcart(state, id) {
      if (state.carts.find(item => item.id === id).count > 1) {
        state.carts.find(item => item.id === id).count--;
      }
    },
    delChecked(state) {
      state.carts = state.carts.filter(item => !item.checked);
    },
    del(state, payload) {
      state.carts = state.carts.filter(item => item.id != payload.id);
    },
    incart(state, payload) {
      const newCart = {
        id: "963",
        numTo: state.numTo,
        typeTo: state.typeTo,
        sizeTo: state.sizeTo
      };
      if (newCart.numTo && newCart.typeTo && newCart.sizeTo) {
        console.log(payload.tocart);
        state.cartlist.push(newCart);
        console.log(state.cartlist);
        payload.link();
      } else {
        alert("请选择商品");
      }
    },
    inadd(state) {
      state.numTo++;
    },
    indel(state) {
      if (state.numTo > 1) {
        state.numTo--;
      }
    },
    inallBtn(state, payload) {
      state.carts.find(
        item => item.id === payload.id
      ).checked = !state.carts.find(item => item.id === payload.id).checked;
    },
    inallRedbtn(state) {
      state.allRed = !state.allRed;
      if (!state.carts.find(item => item.checked === false)) {
        state.carts = state.carts.map(item => {
          return {
            id: item.id,
            checkbox: item.checkbox,
            title: item.title,
            price: item.price,
            kuan: item.kuan,
            chicun: item.chicun,
            num: item.num,
            count: item.count,
            subtotal: item.subtotal,
            checked: false,
            tooltip: item.tooltip
          };
        });
      } else {
        state.carts = state.carts.map(item => {
          return {
            id: item.id,
            checkbox: item.checkbox,
            title: item.title,
            price: item.price,
            kuan: item.kuan,
            chicun: item.chicun,
            num: item.num,
            subtotal: item.subtotal,
            count: item.count,
            checked: true,
            tooltip: item.tooltip
          };
        });
      }
    }
  },
  getters: {
    goodsNum(state) {
      return state.carts
        .filter(item => item.checked)
        .reduce((res, item) => res + item.count, 0);
    },
    total(state) {
      console.log(state.carts.filter(item => item.checked));
      return state.carts
        .filter(item => item.checked)
        .reduce((res, item) => (res = res + item.count * item.price), 0);
    },
    checkedall(state) {
      if (!state.carts.find(item => item.checked === false)) {
        return (state.allRed = true);
      }
    }
  }
});

export default store;
