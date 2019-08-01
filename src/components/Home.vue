<template>
  <section>
    <div class="foot-img">
      <div class="swiper-container banner">
        <div class="swiper-wrapper banner-img">
          <div class="swiper-slide">
            <img src="../assets/images/renwu_03.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/renwu_05.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/renwu_07.png" alt />
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <Moment />
      <div>
        <div class="auto">
          <img src="../assets/images/商品上上_03.png" alt />
          <img src="../assets/images/商品上上_06.png" alt />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Moment from "./Moment";
import Swiper from "swiper";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Moment
  },
  mounted() {
    const mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      },
      slidesPerView: 3
    });
  }
};
</script>

<style>
.banner {
  background-image: url("../assets/images/banner_03.png");
}

.banner {
  display: flex;
  /* height: 430px; */
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
}
.banner-img img {
  padding: 20px;
  width: 330px;
  height: 330px;
}
.swiper-button-next,
.swiper-button-prev {
  position: static;
  width: 30px;
  height: 100px;
  background-size: 20px 30px;
  background-color: rgba(3, 3, 3, 0.5);
}
.swiper-container {
  display: flex;
  width: 65%;
  height: 348px;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
}
section,
.cart {
  background-image: url("../assets/bg.jpg");
}
.foot-img {
  background-image: url("../assets/headerbg.png");
  background-repeat: no-repeat;
}
.auto,
.cart-inner {
  width: 65%;
  margin: 0 auto;
}
.auto > img {
  display: block;
}
</style>
