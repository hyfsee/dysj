<template>
  <div id="app">
    <!-- 搜索框 -->
    <Search :content="content" />

    <!-- 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.url" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 分类框 -->
    <van-grid square :gutter="10">
      <van-grid-item
        :to="item.url"
        :style="{ color: item.color }"
        v-for="item in gridNav"
        :key="item.id"
        :icon="item.icon"
        :text="item.name"
      />
    </van-grid>

    <!-- 实时热门直播 -->
    <div class="list">
      <div class="list-top">
        <div class="list-top-left">实时热门直播</div>
        <router-link to="/streaming" class="list-top-right">
          <div>全部</div>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div class="listImg">
        <router-link class="listImg-item" to="/streaming">
          <div class="listImg-item-top">img</div>
          <div class="listImg-item-bottom">新人主播9.9专场</div>
        </router-link>
        <router-link class="listImg-item" to="/streaming">
          <div class="listImg-item-top">img</div>
          <div class="listImg-item-bottom">新人主播9.9专场</div>
        </router-link>
        <router-link class="listImg-item" to="/streaming">
          <div class="listImg-item-top">img</div>
          <div class="listImg-item-bottom">新人主播9.9专场</div>
        </router-link>
        <router-link class="listImg-item" to="/streaming">
          <div class="listImg-item-top">img</div>
          <div class="listImg-item-bottom">新人主播9.9专场</div>
        </router-link>
      </div>
    </div>

    <!-- 热销商品榜 -->
    <div class="list">
      <div class="list-top">
        <div class="list-top-left">热销商品榜</div>
        <router-link to="/commodityParticulars" class="list-top-right">
          <div>全部</div>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div class="list-bottom">
        <PodcasterClassify :data="industrial" />
      </div>
    </div>

    <!-- 主播涨粉榜 -->
    <div class="list">
      <div class="list-top">
        <div class="list-top-left">主播涨粉榜</div>
        <router-link to="/podcast" class="list-top-right">
          <div>全部</div>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div class="list-bottom">
        <div class="podacster">
          <div class="podacster-left">img</div>
          <div class="podacster-right">
            <div class="podacster-right-top">
              <div class="podacster-right-top-list">1</div>
              <van-icon class="podacster-right-top-icon" name="star" />
              <div class="podacster-right-top-name">name</div>
              <div class="podacster-right-top-color">生活</div>
            </div>
            <div class="podacster-right-bottom">
              <div class="num">
                <div>fans</div>
                <div style="color: red; display: flex">
                  <van-icon
                    style="margin-right: 3px; font-size: 14px"
                    name="back-top"
                  />232.2w
                </div>
                <div>粉丝数</div>
              </div>
              <div class="num">
                <div>praise</div>
                <div style="color: red; display: flex">
                  <van-icon
                    style="margin-right: 3px; font-size: 14px"
                    name="back-top"
                  />232.2w
                </div>
                <div>粉丝数</div>
              </div>
              <div class="num">
                <div>exponent</div>
                <div>--</div>
                <div>粉丝数</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 热门创意素材 -->
    <div class="hotlist">
      <div class="hotlist-top">热门创意素材</div>
      <div class="list">
        <div class="list-top">
          <div class="list-top-left">热门视频</div>
          <router-link to="/originality" class="list-top-right">
            <div>全部</div>
            <van-icon name="arrow" />
          </router-link>
        </div>
        <div class="listImg">
          <router-link class="listImg-item" to="/originality">
            <div class="listImg-item-top" style="height: 100px">img</div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link class="listImg-item" to="/originality">
            <div class="listImg-item-top" style="height: 100px">img</div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link class="listImg-item" to="/originality">
            <div class="listImg-item-top" style="height: 100px">img</div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link class="listImg-item" to="/originality">
            <div class="listImg-item-top" style="height: 100px">img</div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
        </div>
      </div>
      <div class="list">
        <div class="list-top">
          <div class="list-top-left">热门音乐</div>
          <router-link to="/originality" class="list-top-right">
            <div>全部</div>
            <van-icon name="arrow" />
          </router-link>
        </div>
        <div class="listImg">
          <router-link to="/originality" class="listImg-item">
            <div class="listImg-item-top" style="height: 100px">img</div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link to="/originality" class="listImg-item">
            <div class="listImg-item-top" style="height: 100px">img</div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link to="/originality" class="listImg-item">
            <div class="listImg-item-top" style="height: 100px">img</div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link to="/originality" class="listImg-item">
            <div class="listImg-item-top" style="height: 100px">img</div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
        </div>
      </div>
      <div class="list">
        <div class="list-top">
          <div class="list-top-left">热门话题</div>
          <router-link to="/originality" class="list-top-right">
            <div>全部</div>
            <van-icon name="arrow" />
          </router-link>
        </div>
        <div class="listTxt">
          <router-link to="wordParticulars" class="listTxt-item">
            <div class="listTxt-item-top">
              <van-icon name="label-o" />抖音小助手
            </div>
            <div class="listTxt-item-bottom">
              <van-icon name="play-circle-o" />13224.5亿
              <van-icon name="user-circle-o" style="margin-left: 8px" />7738.5w
            </div>
          </router-link>
          <router-link to="wordParticulars" class="listTxt-item">
            <div class="listTxt-item-top">
              <van-icon name="label-o" />抖音小助手
            </div>
            <div class="listTxt-item-bottom">
              <van-icon name="play-circle-o" />13224.5亿
              <van-icon name="user-circle-o" style="margin-left: 8px" />7738.5w
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "../components/Search";
import PodcasterClassify from "../components/PodcasterClassify";
export default {
  components: {
    Search,
    PodcasterClassify,
  },
  data() {
    return {
      // 模拟图片的地址
      images: [
        { url: require("../assets/a1.jpg") },
        { url: require("../assets/a2.jpg") },
        { url: require("../assets/a3.jpg") },
      ],
      //分类框数据
      gridNav: [
        {
          id: 1,
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          name: "创意素材",
          color: "pink",
          icon: "fire",
          url: "/originality",
        },
        {
          id: 2,
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "热门商品",
          color: "skyblue",
          icon: "shop",
          url: "/commodity",
        },
        {
          id: 3,
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "我的抖音号",
          color: "green",
          icon: "label",
          url: "/MyRanking",
        },
        {
          id: 4,
          img: "https://img.yzcdn.cn/vant/apple-4.jpg",
          name: "直播监控",
          color: "orange",
          icon: "eye",
          url: "/ranking",
        },
      ],
      content: "搜索的达人或抖音号或商品",
      //热销商品榜
      industrial: {
        name: "浣语",
        img: "img",
        fans: "22.4w",
        praise: "114.3w",
        exponent: "1666.4",
      },
    };
  },
  methods: {
    mouseClick(e) {
      e.preventDefault();
    },
    rankingUrlClick() {
      this.$router.push({
        path: "hotlist/hotlist2",
      });
    },
  },
  mounted() {
  },
};
</script>

<style scoped lang='less'>
.swipe {
  margin: 1rem 0;
  .van-swipe-item {
    width: 100%;
    height: 100px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    img {
      height: 100px;
      width: 100%;
    }
  }
}

.grid {
  .grid-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
  }
  &:nth-child(4) {
    margin: 0;
  }
}

.van-swipe-cell__right {
  display: flex;
}

.list {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  &-top {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    &-left {
      color: white;
    }
    &-right {
      color: #999;
      display: flex;
      align-items: center;
      font-size: 0.75rem;
    }
  }
  &-bottom {
    .podacster {
      display: flex;
      padding: 10px;
      background-color: #fff;
      margin-bottom: 10px;
      &-left {
        width: 5rem;
        height: 5rem;
        border-radius: 6.25rem;
        background-color: red;
        color: black;
        margin-right: 0.625rem;
      }
      &-right {
        display: flex;
        flex-direction: column;
        color: black;
        flex: 1;
        &-top {
          display: flex;
          align-items: center;
          &-list {
            z-index: 1;
            color: white;
            font-size: 14px;
            position: absolute;
            left: 124px;
          }
          &-icon {
            left: 4px;
            font-size: 30px;
            color: red;
          }
          &-name {
            margin: 0 5px 0 10px;
          }
          &-color {
            color: green;
            font-size: 12px;
            padding: 1px 3px;
            border: 2px solid green;
          }
        }
        &-bottom {
          display: flex;
          font-size: 0.75rem;
          margin-top: 0.625rem;
          justify-content: space-between;
          width: 80%;
          .num {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      }
    }
  }
  .listImg {
    display: flex;
    overflow-x: auto;
    &-item {
      flex: 0 0 28%;
      margin-right: 10px;
      &-top {
        height: 150px;
        background-color: #fff;
        color: black;
      }
      &-bottom {
        font-size: 12px;
        display: flex;
        margin-top: 5px;
      }
    }
  }
  .listTxt {
    display: flex;
    &-item {
      width: 50%;
      margin: 0 10px 10px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      border: 1px solid #777;
      height: 80px;
      padding: 15px 10px;
      &-top {
        display: flex;
        align-items: center;
      }
      &-bottom {
        display: flex;
        align-items: center;
        font-size: 12px;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}

.hotlist {
  font-size: 14px;
  &-top {
    display: flex;
    font-size: 16px;
  }
}
</style>