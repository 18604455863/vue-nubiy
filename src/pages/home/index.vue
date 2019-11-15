<template>
  <div id="nubiaindex">
    <!----------- 广告 ----------->
    <div id="dowApp" v-if="adFlag">
      <a>
        <img src="https://oss.static.nubia.cn/upload/153984776469.jpg" />>
      </a>
      <v-touch @tap="closeAd($event)">
        <span>X</span>
      </v-touch>
    </div>
    <!----------- 导航 轮播 ----------->
    <div class="page_index">
      <div class="search" :class="navBarFixed == true ? 'navBackFixed' : '' ">
        <div class="logo"></div>
        <router-link to="/srarch">
          <div class="searchBox">红魔3S</div>
        </router-link>
        <router-link tag="a" :to="'/memberMessage'" class="searchInfo">
          <img src="https://shop-soa-static.nubia.com/images/buy_mobile/message.png" />
        </router-link>
      </div>
      <div class="carousel">
        <Switch v-if="carouselData.length > 0">
          <Slider v-for="(item,index) in carouselData" :key="index">
            <router-link
              tag="li"
              :to="{name:'product',params:{product_id:item.product_id,spec_id:item.product_id}}"
            >
              <div>
                <img :src="item.small_image | addUrl " />
              </div>
            </router-link>
          </Slider>
        </Switch>
      </div>
    </div>
    <!----------- show----------->
    <div class="show_img">
      <router-link
        tag="li"
        :to="{name:'product',params:{product_id:showImgLeft.product_id,spec_id:showImgLeft.product_id}}"
      >
        <a class="show_img_left">
          <img :src="showImgLeft.small_image | addUrl" />
        </a>
      </router-link>

      <div class="show_img_right">
        <router-link
          tag="li"
          :to="{name:'product',params:{product_id:showImgRT.product_id,spec_id:showImgRT.product_id}}"
        >
          <a>
            <img :src="showImgRT.small_image" | addUrl />
          </a>
        </router-link>
        <router-link
          tag="li"
          :to="{name:'product',params:{product_id:showImgRB.product_id,spec_id:showImgRB.product_id}}"
        >
          <a>
            <img :src="showImgRB.small_image" | addUrl />
          </a>
        </router-link>
      </div>
    </div>
    <!----------- ----------->
    <div class="rxjx">
      <h2>热销机型</h2>
      <router-link
        tag="li"
        :to="{name:'product',params:{product_id:rxjxImg.product_id,spec_id:rxjxImg.product_id}}"
      >
        <a>
          <img :src="rxjxImg.small_image" | addUrl />
        </a>
      </router-link>
    </div>
    <!----------- ----------->
    <div class="showAll">
      <div class="show_list" v-for="(item,index) in hotSaleData" :key="index">
        <router-link
          tag="li"
          :to="{name:'product',params:{product_id:item.product_id,spec_id:item.block_products.spec_id}}"
        >
          <a>
            <img src="item.small_image" | addUrl />
          </a>
          <div class="info">
            <h4>{{item.title}}</h4>
            <h5 v-html="item.sub_title"></h5>
            <p>
              <em>￥</em>
              <span class="nowPrice">{{item.block_products.price}}</span>
              <span
                class="oldPrice"
              >{{item.block_products.price==item.block_products.original_price ?"":item.block_products.original_price}}</span>
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <router-link to="/cate">
      <div class="findMorePhone">查看更多手机 ></div>
    </router-link>
    <!----------- 111 ----------->
    <div class="siftParts">精选配件</div>
    <router-link
      tag="li"
      :to="{name:'product',params:{product_id:jxpjImg.product_id,spec_id:jxpjImg.product_id}}"
      class="siftParts_banner"
    >
      <img :src="jxpjImg.small_image | addUrl" />
    </router-link>
    <!--copyList-->
    <div class="siftParts_list">
      <div class="sp_showParts" v-for="(item,index) in accessoriesData" :key="index">
        <router-link
          tag="li"
          :to="{name:'product',params:{product_id:item.product_id,spec_id:item.block_products.spec_id}}"
        >
          <a class="sp_showImg">
            <img :src="item.small_image | addUrl" />
          </a>
          <h3>{{item.title}}</h3>
          <p>
            ￥
            <span>{{item.block_products.price}}</span>
          </p>
        </router-link>
      </div>
    </div>
    <router-link to="/more/27/周边产品">
      <div class="findMorePhone">查看更多配件和周边商品 ></div>
    </router-link>
    <!----------- 111 ----------->
    <div class="service">
      <h2>联系客服</h2>
      <div class="overBox">
        <em class="service_message"></em>
        <div class="service_box">
          <h3>在线客服</h3>
          <p>7*24小时 全年无休</p>
        </div>
      </div>

      <div class="overBox" style="border-top:1px solid rgb(230,230,230)">
        <em class="service_phone"></em>
        <div class="service_box">
          <h3>客服热线400-700-6600</h3>
          <p>周一至周日 8:30-20:30 全年无休</p>
        </div>
      </div>
    </div>
    <!----------- 111 ----------->
    <div class="footer">
      <div class="footerTitle">
        <a href="###">隐私政策</a>
        <b></b>
        <a href="##">关于Cookie</a>
      </div>
      <div class="footerContent">
        <a>2012-2019 努比亚技术有限公司 版权所有</a>
        <p>
          <a href="#">粤ICP备10006213号</a>
          <i></i>
          <a href="#">ICP经营许可证编号：粤B2-20120688</a>
        </p>
        <a href="#">粤公网安备 44030502000309号</a>
      </div>
    </div>
    <!----------- 111 ----------->
    <div class="noMore">没有更多啦~</div>
  </div>
</template>

<script>
import { homeApi } from "@api";
import { Swiper, Slide } from "vue-swiper-component";
export default {
  name: "home",
  data() {
    return {
      carouselData: [],
      hotSaleData: [],
      accessoriesData: [],
      showImgLeft: {},
      showImgRT: {},
      showImgRB: {},
      rxjxImg: {},
      jxpjImg: {},
      navBarFixed: false,
      adFlag: true
    };
  },
  async created() {
    let data = await homeApi();
    console.log(data.data);
    this.showImgLeft = data.data[502][0];
    this.showImgRT = data.data[503][0];
    this.showImgRB = data.data[504][0];
    this.rxjxImg = data.data[507][0];
    this.jxpjImg = data.data[508][0];
    this.hotSaleData = data.data[506];
    this.carouselData = data.data[501];
    this.accessoriesData = data.data[505];
  },
  components: {
    Swiper,
    Slide
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll);
  },
  methods: {
    closeAd() {
      this.adFlag = false;
      this.navBarFixed = true;
    },
    watchScroll() {
      var scrollTop = window.pageYOffset;
      if (scrollTop > 54 || this.adFlag == false) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
/* --------------------------------------------  */
html {
  font-size: 26.67vw;
}

img {
  width: 100%;
  height: 100%;
}
.downApp {
  height: 0.547rem;
}

.downApp span {
  position: absolute;
  color: #fff;
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 10px;
  background: #ccc;
  line-height: 0.2rem;
  text-align: center;
  right: 0;
  top: 0;
}

.carousel {
  width: 100%;
  height: 2.6rem;
}
.search {
  width: 100%;
  height: 0.56rem;
  padding: 0.1rem 0.172rem;
  background: rgba(255, 255, 255, 0);
  position: fixed;
  top: 0.547rem;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
}
.logo {
  width: 0.98rem;
  height: 0.16rem;
  background: url("https://shop-soa-static.nubia.com/images/logo_black.png")
    no-repeat 0 center;
  background-size: cover;
  margin-right: 0.08rem;
}
.searchBox {
  width: 2.04rem;
  height: 0.35rem;
  padding-left: 0.4rem;
  color: rgb(115, 115, 115);
  background: rgb(248, 248, 248)
    url(https://oss.static.nubia.cn/active/5c73876ac212759.png) no-repeat 12px
    center;
  background-size: 20px;
  border-radius: 20px;
  font-size: 14px;
  line-height: 0.35rem;
}
.searchInfo {
  width: 0.289rem;
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.11rem;
  position: relative;
}
.searchInfo img {
  width: 0.24rem;
  height: 0.24rem;
}
.navBarWrap {
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 999;
}
.show_img {
  border-bottom: 0.1rem solid #eeeeee;
  overflow: hidden;
}
.show_img_left {
  width: 1.919rem;
  height: 2.62rem;
  display: block;
  float: left;
  border-right: 0.05rem solid #eeeeee;
}
.show_img_right {
  width: 1.83rem;
  height: 2.62rem;
  float: right;
}
.show_img_right a {
  display: block;
  border-bottom: 0.04rem solid #eeeeee;
}
.rxjx {
  margin-bottom: 0.03rem;
  overflow: hidden;
}
.rxjx h2 {
  padding: 0 0.2rem;
  line-height: 0.44rem;
  font-size: 0.2rem;
}
.rxjx a {
  display: block;
  height: 2.03rem;
}
.showAll {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.show_list {
  width: 1.81rem;
  height: 2.798rem;
  float: left;
}
.show_list a {
  width: 99%;
  height: 1.85rem;
  display: block;
  background: #f4f3ef;
  margin-top: 0.1rem;
}
.info {
  font-size: 0.16rem;
  padding-left: 0.2rem;
  height: 0.4rem;
  margin-top: 0.1rem;
  line-height: 0.2rem;
}
.info h4 {
  font-size: 0.16rem;
  font-weight: 800;
}
.info h5 {
  font-size: 0.13rem;
  color: #8e8d8e;
}
.info h5 span {
  color: #8e8d8d !important;
}
.info em {
  font-size: 0.12rem;
  color: rgb(239, 65, 35);
  font-style: normal;
}

.nowPrice {
  font-weight: 500;
  font-size: 0.16rem;
  margin-right: 0.04px;
  color: rgb(239, 65, 35);
  margin-right: 0.1rem;
}
.oldPrice {
  text-decoration: line-through;
  font-size: 0.16rem;
  font-weight: 300;
  color: rgb(112, 112, 112);
}
.show_list p {
  height: 0.2rem;
  line-height: 0.2rem;
  margin-top: 0.05rem;
}
.showAll {
  display: flex;
  justify-content: space-between;
}
.findMorePhone {
  height: 0.548rem;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.16rem;
  color: #8e8d8d;
  border-bottom: 0.06rem solid #eee;
}
.siftParts {
  padding: 0 0.2rem;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.2rem;
  color: #000;
}
.siftParts_banner {
  height: 2.0323rem;
  cursor: pointer;
  overflow: hidden;
}
.siftParts_list {
  width: 100%;
  margin-top: 0.06rem;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.sp_showParts {
  width: 1.82rem;
  height: 2.65rem;
}
.sp_showImg {
  width: 1.82rem;
  height: 1.95rem;
  padding: 0.05rem 0;
}
.sp_showImg img {
  width: 1.82rem;
  height: 1.85rem;
  background: rgb(244, 243, 239);
}
.sp_showParts h3 {
  height: 0.2rem;
  line-height: 0.2rem;
  font-weight: 700;
  font-size: 0.16rem;
  padding-left: 0.1rem;
  margin-top: 0.1rem;
}
.sp_showParts p {
  height: 0.208rem;
  line-height: 0.208rem;
  font-size: 0.12rem;
  color: rgb(239, 65, 35);
  padding-left: 0.1rem;
  margin-top: 0.04rem;
}
.sp_showParts span {
  font-size: 0.16rem;
}
.service {
  height: 1.976rem;
  padding: 0.128rem 0.128rem 0 0.128rem;
}
.service h2 {
  font-size: 0.19rem;
  margin-left: 0.1rem;
  font-weight: normal;
}
.overBox {
  overflow: hidden;
}
.service_message {
  width: 0.524rem;
  height: 0.79rem;
  display: block;
  background: #fff url(//shop-soa-static.nubia.com/images/service.png) no-repeat
    right 14px center;
  background-size: 30px;
  float: left;
}
.service_box {
  width: 2.95rem;
  height: 0.79rem;
  color: rgb(150, 150, 150);
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff url(https://shop-soa-static.nubia.com/images/arrowRight.png)
    no-repeat right center;
  background-size: 15px;
}
.service_box h3 {
  height: 0.28rem;
  line-height: 0.28rem;
  font-weight: 100;
  font-size: 0.16rem;
  color: rgb(30, 30, 30);
}
.service_box p {
  font-size: 0.11rem;
  color: rgb(150, 150, 150);
  height: 0.15rem;
}
.service_phone {
  width: 0.524rem;
  height: 0.79rem;
  display: block;
  float: left;
  background: #fff url(//shop-soa-static.nubia.com/images/phone.png) no-repeat
    right 14px center;
  background-size: 30px;
}
.footer {
  height: 1.496rem;
  padding: 0.24rem;
  border-top: 0.08rem solid #eee;
}
.footerTitle {
  font-size: 0.14rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footerTitle a {
  font-size: 0.144rem;
  height: 0.168rem;
  line-height: 0.128rem;
  color: rgb(153, 153, 153);
}
.footerTitle b {
  display: inline-block;
  border-right: 1px solid rgb(153, 153, 153);
  height: 0.16rem;
  margin: 0 0.11rem;
}
.footerContent {
  margin-top: 0.08rem;
  height: 0.688rem;
  font-size: 0.096rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footerContent a {
  height: 0.23rem;
  font-size: 0.096rem;
  line-height: 0.23rem;
  color: rgb(153, 153, 153);
}
.footerContent p {
  padding-left: 0.32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(153, 153, 153);
  font-size: 0.096rem;
}
.footerContent i {
  height: 0.11rem;
  border-right: 1px solid rgb(153, 153, 153);
  margin-left: 0.08rem;
  margin-right: 0.04rem;
}
.noMore {
  height: 0.52rem;
  margin-bottom: 0.56rem;
  line-height: 0.52rem;
  text-align: center;
  color: #9c9c9c;
  background: #eee;
}
</style>