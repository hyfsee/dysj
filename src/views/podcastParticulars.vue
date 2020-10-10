<template>
  <div>
    <!-- 播主详情 -->
    <div class="top">
      <div class="top-left">
        <div class="top-left-img">img</div>
        <div class="top-left-top">政务排行榜月榜</div>
        <div class="top-left-center">第一名</div>
        <div class="top-left-bottom"><van-icon name="star" />收藏</div>
      </div>
      <div class="top-right">
        <div class="top-right-top">
          央视新闻
          <div class="top-right-top-txt">政务</div>
        </div>
        <div class="top-right-center">
          <div class="top-right-center-left">抖音ID:1354353213</div>
          <div class="top-right-center-right">性别:未知</div>
        </div>
        <div class="top-right-center">
          <div class="top-right-center-left">地区:北京</div>
          <div class="top-right-center-right">年龄:未知</div>
        </div>
        <div class="top-right-bottom">简介:本宝宝暂时还没想到个性签名</div>
      </div>
    </div>

    <div class="percent">
      <div class="percent-nav">
        <div>飞瓜指数</div>
        <div class="percent-nav-item">
          <div class="percent-nav-item-style">1669.2</div>
        </div>
      </div>
      <div class="percent-nav">
        <div>昨日排名打败</div>
        <div class="percent-nav-item">
          <div class="percent-nav-item-style">99.83%</div>
          的播主
        </div>
      </div>
      <div class="percent-nav">
        <div>近一周排名打败</div>
        <div class="percent-nav-item">
          <div class="percent-nav-item-style">99.84%</div>
          的播主
        </div>
      </div>
    </div>

    <div class="num">
      <div class="num-left">
        <div class="num-left-txt">9731.9w</div>
        粉丝
      </div>
      <div class="num-right">3553个作品</div>
    </div>

    <div class="overall">
      <div class="overall-top">
        <div class="overall-top-left">总点赞/总评价/总分享</div>
        <div class="overall-top-right">展开<van-icon name="arrow-down" /></div>
      </div>
      <div class="overall-bottom">
        <div class="overall-bottom-item">
          <div class="overall-bottom-item-left">
            <div class="overall-bottom-item-left-txt">37.0亿</div>
            总点赞
          </div>
          <div class="overall-bottom-item-right">平均作品点赞数：104.1w</div>
        </div>
        <div class="overall-bottom-item">
          <div class="overall-bottom-item-left">
            <div class="overall-bottom-item-left-txt">8196.0w</div>
            总评价
          </div>
          <div class="overall-bottom-item-right">集均评价：2.6w</div>
        </div>
        <div class="overall-bottom-item">
          <div class="overall-bottom-item-left">
            <div class="overall-bottom-item-left-txt">6948.3w</div>
            总分享
          </div>
          <div class="overall-bottom-item-right">集均分享：1.9w</div>
        </div>
      </div>
    </div>

    <!-- 趋势图 -->
    <div class="tendency">
      <Tab :tab="tab1" />
      <div class="tendency-img">img</div>
    </div>

    <!-- 粉丝画像 -->
    <div class="distribution">
      <div class="distribution-top">粉丝画像</div>
      <div class="distribution-center">
        <Tab :tab="tab2" />
      </div>
      <div class="distribution-show1">
        <div class="distribution-show1-top">
          <div>女:42.93%</div>
          <div>男:57.07%</div>
        </div>
        <div class="distribution-show1-center">进度条</div>
        <van-circle
          v-model="currentRate"
          :rate="50"
          :speed="100"
          :text="text"
        />
      </div>
    </div>

    <!-- 直播分析 -->
    <div class="analyse">
      <div class="analyse-top">直播分析</div>
      <div class="analyse-bottom">
        <div class="analyse-bottom-item">
          <div class="analyse-bottom-item-left">img</div>
          <div class="analyse-bottom-item-right">
            <div class="analyse-bottom-item-right-top">
              新闻1+1 假期后的疫情防控 如何继续
            </div>
            <div class="analyse-bottom-item-right-center">
              2020-10-09 21:32:17
            </div>
            <div class="analyse-bottom-item-right-bottom">
              <div class="analyse-bottom-item-right-bottom-left">
                人数峰值:4614
              </div>
              <div class="analyse-bottom-item-right-bottom-right">
                直播销售额:0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 播主视频 -->
    <div class="video">
      <div class="video-top">播主视频</div>
      <Tab :tab="tab3" />
      <div class="video-bottom">
        <router-link class="video-bottom-item" to="/videoParticulars">
          <div class="video-bottom-item-top">img</div>
          <div class="video-bottom-item-bottom">09月08日</div>
        </router-link>
        <router-link class="video-bottom-item" to="/videoParticulars">
          <div class="video-bottom-item-top">img</div>
          <div class="video-bottom-item-bottom">09月08日</div>
        </router-link>
        <router-link class="video-bottom-item" to="/videoParticulars">
          <div class="video-bottom-item-top">img</div>
          <div class="video-bottom-item-bottom">09月08日</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "../components/Tab";
export default {
  components: {
    Tab,
  },
  data() {
    return {
      tab1: ["粉丝增量趋势图", "点赞增量趋势图", "评论增量趋势图"],
      tab2: ["性别年龄分布", "地域分布", "星座分布"],
      tab3: ["最热", "最新"],
      //进度条数据
      currentRate: 0,
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    },
  },
  methods: {},
};
</script>

<style scoped lang='less'>
.top {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #777;
  &-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-img {
      width: 70px;
      height: 70px;
      border-radius: 70px;
      color: black;
      background-color: #fff;
    }
    &-top {
      font-size: 14px;
      margin: 10px 0;
    }
    &-center {
      color: green;
    }
    &-bottom {
      font-size: 14px;
      padding: 3px 25px;
      margin-top: 10px;
      background-color: green;
    }
  }
  &-right {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    padding: 0 10px;
    border-left: 1px solid #777;
    &-top {
      display: flex;
      margin-bottom: 10px;
      &-txt {
        border: 1px solid green;
        margin-left: 10px;
      }
    }
    &-center {
      width: 100%;
      display: flex;
      font-size: 14px;
      color: #777;
      justify-content: space-between;
    }
    &-bottom {
      font-size: 14px;
      margin-top: 10px;
    }
  }
}

.percent {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #777;
  &-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    color: #777;
    &-item {
      display: flex;
      align-items: center;
      margin-top: 10px;
      color: white;
      &-style {
        color: green;
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
}

.num {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 1px solid #777;
  &-left {
    display: flex;
    align-items: center;
    &-txt {
      font-size: 16px;
      margin-right: 5px;
    }
  }
}

.overall {
  display: flex;
  flex-direction: column;
  &-top {
    display: flex;
    justify-content: space-between;
    color: #777;
    font-size: 14px;
    border-bottom: 1px solid #777;
    padding: 10px 0;
    &-right {
      display: flex;
      align-items: center;
      color: green;
    }
  }
  &-bottom {
    display: flex;
    flex-direction: column;
    &-item {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #777;
      color: #777;
      &-left {
        display: flex;
        align-items: center;
        color: white;
        &-txt {
          font-size: 16px;
        }
      }
    }
  }
}

.tendency {
  display: flex;
  flex-direction: column;
  &-img {
    margin: 20px 0 20px 20px;
    background-color: #fff;
    height: 100px;
  }
}

.distribution {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &-top {
    font-size: 20px;
    border-bottom: 1px solid #777;
    width: 100%;
    display: flex;
    padding-bottom: 10px;
  }
  &-center {
    display: flex;
    width: 100%;
  }
  &-show1 {
    width: 100%;
    padding: 20px;
    color: white;
    &-top {
      display: flex;
      font-size: 14px;
      justify-content: space-between;
    }
    &-center {
      height: 20px;
      background-color: #fff;
      color: black;
      margin: 10px 0 30px;
    }
    /deep/ .van-circle__text {
      color: white;
    }
  }
}

.analyse {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &-top {
    width: 100%;
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #777;
  }
  &-bottom {
    display: flex;
    flex-direction: column;
    &-item {
      display: flex;
      color: black;
      padding: 10px 0;
      &-left {
        background-color: #fff;
        width: 60px;
        margin-right: 10px;
      }
      &-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 14px;
        color: #777;
        &-top {
          font-size: 16px;
          color: white;
        }
        &-center {
          margin: 10px 0;
        }
        &-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}

.video {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &-top {
    width: 100%;
    border-bottom: 1px solid #777;
    display: flex;
    padding: 10px 0;
  }
  /deep/ .van-tabs {
    width: 100px;
  }
  &-bottom {
    display: flex;
    width: 100%;
    padding-top: 10px;

    &-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 33.33%;
      margin: 0 10px 10px 0;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &-top {
        width: 100%;
        height: 130px;
        background-color: #fff;
        color: black;
      }
    }
  }
}
</style>