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
          <div class="listImg-item-top">
            <img
              style="width: 100%; height: 100%"
              src="../assets/a1.jpg"
              alt=""
            />
            <div class="listImg-item-top-style">
              <div>直播</div>
              <div>{{ streaming.online_num }}</div>
            </div>
            <div class="listImg-item-top-txt">
              <img
                style="height: 1.25rem; border-radius: 100%; width: 1.25rem"
                :src="streaming.user_img"
                alt=""
              />{{ streaming.user_name }}
            </div>
          </div>
          <div class="listImg-item-bottom">{{ streaming.online_title }}</div>
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
        <PodcasterClassifyCommodity :data="order" />
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
          <div class="podacster-left">
            <img
              style="width: 100%; height: 100%"
              :src="riseNav.user_img"
              alt=""
            />
          </div>
          <div class="podacster-right">
            <div class="podacster-right-top">
              <div class="podacster-right-top-list">1</div>
              <van-icon class="podacster-right-top-icon" name="star" />
              <div class="podacster-right-top-name">
                {{ riseNav.user_name }}
              </div>
              <div class="podacster-right-top-color">
                {{ riseNav.user_type }}
              </div>
            </div>
            <div class="podacster-right-bottom">
              <div class="num">
                <div>{{ riseNav.user_fans }}</div>
                <div style="color: red; display: flex">
                  <van-icon
                    style="margin-right: 0.1875rem; font-size: 0.875rem"
                    name="back-top"
                  />{{ riseNav.user_addfans }}
                </div>
                <div>粉丝数</div>
              </div>
              <div class="num">
                <div>{{ riseNav.user_like }}</div>
                <div style="color: red; display: flex">
                  <van-icon
                    style="margin-right: 0.1875rem; font-size: 0.875rem"
                    name="back-top"
                  />{{ riseNav.user_addlike }}
                </div>
                <div>点赞数</div>
              </div>
              <div class="num">
                <div>{{ riseNav.user_video }}</div>
                <div style="color: red; display: flex">
                  <van-icon
                    style="margin-right: 0.1875rem; font-size: 0.875rem"
                    name="back-top"
                  />{{ riseNav.user_addvideo }}
                </div>
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
            <div class="listImg-item-top" style="height: 6.25rem">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />
            </div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link class="listImg-item" to="/originality">
            <div class="listImg-item-top" style="height: 6.25rem">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />
            </div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link class="listImg-item" to="/originality">
            <div class="listImg-item-top" style="height: 6.25rem">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />
            </div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link class="listImg-item" to="/originality">
            <div class="listImg-item-top" style="height: 6.25rem">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />
            </div>
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
            <div class="listImg-item-top" style="height: 6.25rem">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />
            </div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link to="/originality" class="listImg-item">
            <div class="listImg-item-top" style="height: 6.25rem">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />g
            </div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link to="/originality" class="listImg-item">
            <div class="listImg-item-top" style="height: 6.25rem">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />
            </div>
            <div class="listImg-item-bottom">新人主播9.9专场</div>
          </router-link>
          <router-link to="/originality" class="listImg-item">
            <div class="listImg-item-top" style="height: 6.25rem">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />
            </div>
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
              <van-icon
                name="user-circle-o"
                style="margin-left: 0.5rem"
              />7738.5w
            </div>
          </router-link>
          <router-link to="wordParticulars" class="listTxt-item">
            <div class="listTxt-item-top">
              <van-icon name="label-o" />抖音小助手
            </div>
            <div class="listTxt-item-bottom">
              <van-icon name="play-circle-o" />13224.5亿
              <van-icon
                name="user-circle-o"
                style="margin-left: 0.5rem"
              />7738.5w
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "../components/Search";
import PodcasterClassifyCommodity from "../components/PodcasterClassifyCommodity";
export default {
  components: {
    Search,
    PodcasterClassifyCommodity,
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
      order: {
        order_img: require("../assets/a1.jpg"),
        order_name: "商品名称",
        order_sale: "232销量",
        order_views: "232浏览量",
        order_zh: "232转换率",
      },
      //热门直播
      streaming: {
        online_num: "232人数",
        user_img: require("../assets/a1.jpg"),
        user_name: "用户名称",
        online_title: "直播间名称",
      },
      //主播涨粉榜
      riseNav: {
        user_img: require("../assets/a1.jpg"),
        user_name: "爱唱歌",
        user_type: "搞笑",
        user_fans: "232",
        user_addfans: "232",
        user_like: "232",
        user_addlike: "232",
        user_video: "232",
        user_addvideo: "232",
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
  mounted() {},
};
</script>

<style scoped lang='less'>
.swipe {
  margin: 1rem 0;
  .van-swipe-item {
    width: 100%;
    height: 6.25rem;
    color: #fff;
    font-size: 1.25rem;
    line-height: 9.375rem;
    text-align: center;
    img {
      height: 6.25rem;
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
  margin-top: 0.625rem;
  &-top {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0;
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
      padding: 0.625rem;
      background-color: #fff;
      margin-bottom: 0.625rem;
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
            font-size: 0.875rem;
            position: absolute;
            left: 7.75rem;
          }
          &-icon {
            left: 0.25rem;
            font-size: 1.875rem;
            color: red;
          }
          &-name {
            margin: 0 0.3125rem 0 0.625rem;
          }
          &-color {
            color: green;
            font-size: 0.75rem;
            padding: 0.0625rem 0.1875rem;
            border: 0.125rem solid green;
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
      margin-right: 0.625rem;
      &-top {
        height: 8.125rem;
        color: black;
        position: relative;
        font-size: 0.75rem;
        &-style {
          display: flex;
          width: 90%;
          left: 0.25rem;
          justify-content: space-between;
          color: white;
          position: absolute;
          top: 0.625rem;
        }
        &-txt {
          display: flex;
          width: 100%;
          position: absolute;
          bottom: 0.625rem;
          align-items: center;
        }
      }
      &-bottom {
        font-size: 0.75rem;
        display: flex;
        margin-top: 0.3125rem;
      }
    }
  }
  .listTxt {
    display: flex;
    &-item {
      width: 50%;
      margin: 0 0.625rem 0.625rem 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      border: 0.0625rem solid #777;
      height: 5rem;
      padding: 0.9375rem 0.625rem;
      &-top {
        display: flex;
        align-items: center;
      }
      &-bottom {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}

.hotlist {
  font-size: 0.875rem;
  &-top {
    display: flex;
    font-size: 1rem;
  }
}
</style>