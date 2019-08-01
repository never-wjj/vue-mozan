<template>
  <div class="sec-2">
    <div class="sec-2-inner">
      <div class="sec-2-inner-1">
        <img style="float:left;" src="../assets/header1.jpg" alt />
        <span style="font-size:34px">龙之谷六周年限定礼包大Boss兵龙款男士T恤</span>
        <div class="moment-top">
          <div>
            <p>距离预售结束</p>
            <div class="moment">
              <span>{{countDownList}}</span>
            </div>
          </div>
          <div>
            <p>相关专区</p>
            <img src="../assets/xiangguan_03.png" alt />
          </div>
        </div>
        <p class="moment-p">
          <span class="xinyuan">添加心愿单</span>
          <span>
            分享
            <img src="../assets/images/moment-p_11.png" alt />&nbsp;
            <img src="../assets/images/moment-p_13.png" alt />
          </span>
          <span style="float:right">
            <span class="yellow">注：</span>
            商品将于
            <span class="yellow">2019/08/10</span> 统一发货
          </span>
        </p>
      </div>
      <div class="moment-right">
        <p class="bth-df">
          <span class="moment-bth">预售价</span>
          <b>￥700</b>
        </p>
        <p class="bth-df">
          <span class="moment-bth">款式</span>
          <el-button
            id="element-bth"
            round
            v-for="kua in kuan"
            :key="kua.id"
            @click="type({id:kua.id})"
          >{{kua.kuanshi}}</el-button>
        </p>
        <div class="bth-df">
          <span class="moment-bth" style="    margin-bottom: 76px">尺码</span>
          <div style="width:280px" class="bth-but">
            <el-button
              id="element-bot"
              round
              v-for="inf in info"
              :key="inf.id"
              @click="size({id:inf.id})"
            >{{inf.chi}}</el-button>
          </div>
        </div>
        <p class="bth-df">
          <span class="moment-bth">数量</span>
          <span class="left" @click="delnum">-</span>
          <span class="zhong">{{$store.state.numTo}}</span>
          <span class="right" @click="addnum">+</span>
        </p>
      </div>
    </div>

    <div class="yugou">
      <p style=" cursor: pointer;">
        <b @click="addCart({link:tocart})">立即预购</b>
      </p>
      <div class="bgi"></div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "moment",
  data() {
    return {
      countDownList: "00天00时00分00秒",
      actEndTime: "2019-08-10 18:50:00"
    };
  },
  computed: {
    info() {
      return this.$store.state.info;
    },
    kuan() {
      return this.$store.state.kuan;
    }
  },
  created() {
    console.log(this.$store.state.numTo);
    this.countDown();
  },
  methods: {
    timeFormat(param) {
      return param < 10 ? "0" + param : param;
    },
    type(id) {
      this.$store.commit("intype", id);
    },
    addnum() {
      this.$store.commit("inadd");
    },
    delnum() {
      this.$store.commit("indel");
    },
    size(id) {
      this.$store.commit("insize", id);
    },
    addCart(link) {
      this.$store.commit("incart", link);
    },
    tocart() {
      this.$router.push("/wincart");
    },
    countDown(it) {
      var interval = setInterval(() => {
        // 获取当前时间，同时得到活动结束时间数组
        let newTime = new Date().getTime(); // 对结束时间进行处理渲染到页面
        let endTime = new Date(this.actEndTime).getTime();
        let obj = null; // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000; // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt((time % (60 * 60 * 24)) / 3600);
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else {
          // 活动已结束，全部设置为'00'
          obj = {
            day: "00",
            hou: "00",
            min: "00",
            sec: "00"
          };
          clearInterval(interval);
        }
        this.countDownList =
          obj.day + "天" + obj.hou + "时" + obj.min + "分" + obj.sec + "秒";
      }, 1000);
    }
  }
};
</script>

<style>
.sec-2-inner {
  width: 65%;
  margin: 0 auto;
  background-color: #2b2e33;
  padding: 20px;
  display: flex;
}
.sec-2-inner-1 {
  color: #fff;
  width: 600px;
  padding: 10px 60px 10px 10px;
  border-right: 2px solid #ccc;
}
.sec-2-inner-1 > img {
  padding-right: 20px;
}
.moment-top {
  margin-top: 60px;
  display: flex;
  color: #ccc;
}
.moment {
  width: 360px;
  line-height: 60px;
  background-color: #707378;
  text-align: center;
  color: #fed700;
  font-size: 36px;
  border-radius: 8px;
  margin-right: 8px;
}
.moment-p {
  font-size: 13px;
}
.xinyuan {
  border-radius: 4px;
  line-height: 30px;
  border: 1px solid yellow;
}
.yellow {
  color: yellow;
}
.yugou {
  width: 65%;
  margin: 0 auto;
  background-color: #2b2e33;
}
.yugou p {
  border: 2px solid yellow;
  border-radius: 5px;
  text-align: center;
  line-height: 25px;
  margin: 0 15px;
  padding: 15px;
  color: #fed700;
  font-size: 26px;
}
.bgi {
  background-image: url("../assets/header-fbg.png");
  height: 50px;
}
.moment-bth {
  width: 64px;
  display: block;
  text-align: center;
  height: 26px;
  background-color: #fff;
  border-radius: 14px;
  font-size: 13px;
  padding: 4px 8px;
  margin-right: 16px;
}
.bth-df {
  display: flex;
  align-items: center;
}
.bth-df > b {
  color: #fed700;
  font-size: 30px;
}
.moment-right {
  padding: 15px;
}
.el-button.is-round {
  font-size: 13px;
  border: 1px solid yellow;
  border-radius: 12px;
  padding: 6px 8px;
  width: 70px;
  margin: 5px;
}
.bth-df .left,
.bth-df .right {
  padding: 12px 30px;
  border: 1.5px solid #fff;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}
#element-bth:active {
  color: #fed700;
  border: 1px solid yellow;
}
#element-bot.el-button:hover,
.el-button:focus {
  background-color: #fed700;
  border: 1px solid yellow;
}
.bth-df .zhong {
  padding: 10px;
  color: #fff;
  margin: 0 20px;
}
.moment-right .el-button.is-round {
  background-color: #2b2e33;
  color: #fff;
  border: 1px solid #fff;
}
.moment-right .el-button.is-round.active {
  color: #fed700;
  background-color: #fed700;
}
</style>