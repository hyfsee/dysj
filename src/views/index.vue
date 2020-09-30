<template>
  <div id="app">
    <!-- 搜索框 -->
    <Search :data="placeholder" />

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
        :style="{color:item.color}"
        v-for="item in gridNav"
        :key="item.id"
        :icon="item.icon"
        :text="item.name"
      />
    </van-grid>

    <!-- 热门榜单 -->
    <div class="hotlists">
      <div class="hotlists-top">
        <i>热门榜单</i>
        <span @click="hotUrlClick">
          <div>全部</div>
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="hotlists-bottom">
        <div class="hotlist">
          <div class="hotlist-top">
            <span>涨粉榜</span>
            <van-icon name="arrow" />
          </div>
          <div class="hotlist-bottom">
            <img src="../../img/1.jpg" alt />
            <span>济南公安</span>
          </div>
        </div>
        <div class="hotlist">
          <div class="hotlist-top">
            <span>涨粉榜</span>
            <van-icon name="arrow" />
          </div>
          <div class="hotlist-bottom">
            <img src="../../img/1.jpg" alt />
            <span>济南公安</span>
          </div>
        </div>
        <div class="hotlist">
          <div class="hotlist-top">
            <span>涨粉榜</span>
            <van-icon name="arrow" />
          </div>
          <div class="hotlist-bottom">
            <img src="../../img/1.jpg" alt />
            <span>济南公安</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品排行榜 -->
    <div class="rankinglist">
      <div class="rankinglist-top">
        <div class="rankinglist-top-left">商品排行榜</div>
        <div class="rankinglist-top-right" @click="rankingUrlClick">
          <div>全部</div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="rankinglist-bottom">
        <div class="rankinglist-bottom-list">
          <em style="color:orange;font-weight:700;font-size:1rem">01</em>
          <img src alt />
          <div class="rankinglist-bottom-list-nav">
            <div>布沙发极简组合简约北欧</div>
            <div style="color:orange">￥7280.0</div>
            <div class="rankinglist-bottom-list-nav-color">
              <div>浏览量增量：27.4W</div>
              <div>销售增量：1518</div>
            </div>
          </div>
        </div>
        <div class="rankinglist-bottom-list">
          <em style="color:orange;font-weight:700;font-size:1rem">01</em>
          <img src alt />
          <div class="rankinglist-bottom-list-nav">
            <div>布沙发极简组合简约北欧</div>
            <div style="color:orange">￥7280.0</div>
            <div class="rankinglist-bottom-list-nav-color">
              <div>浏览量增量：27.4W</div>
              <div>销售增量：1518</div>
            </div>
          </div>
        </div>
        <div class="rankinglist-bottom-list">
          <em style="color:orange;font-weight:700;font-size:1rem">01</em>
          <img src alt />
          <div class="rankinglist-bottom-list-nav">
            <div>布沙发极简组合简约北欧</div>
            <div style="color:orange">￥7280.0</div>
            <div class="rankinglist-bottom-list-nav-color">
              <div>浏览量增量：27.4W</div>
              <div>销售增量：1518</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "../components/Search";

export default {
  components: {
    Search,
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
          name: "抖音热门",
          color: "pink",
          icon: "fire",
          url: "/hot",
        },
        {
          id: 2,
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "热门商品",
          color: "skyblue",
          icon: "shop",
          url: "/hotlist/hotlist2",
        },
        {
          id: 3,
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "我的抖音号",
          color: "green",
          icon: "label",
          url: "/personage",
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
      //传给搜索框的数据
      placeholder: "搜索播主、视频、音乐",
    };
  },
  methods: {
    mouseClick(e) {
      e.preventDefault();
    },
    hotUrlClick() {
      this.$router.push({
        path: "hotlist/hotlist1",
      });
    },
    rankingUrlClick() {
      this.$router.push({
        path: "hotlist/hotlist2",
      });
    },
  },
  mounted(){
    
  }
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

.hotlists {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  overflow: hidden;
  &-top {
    display: flex;
    justify-content: space-between;
    color: white;
    margin-bottom: 1rem;
    span {
      font-size: 0.75rem;
      color: #999;
      display: flex;
      align-items: center;
    }
  }
  &-bottom {
    display: flex;
    width: 100%;
    overflow: auto;
    .hotlist {
      flex: 0 0 60%;
      background-color: orange;
      padding: 0.625rem 1rem 1rem;
      margin-right: 1.25rem;
      display: flex;
      flex-direction: column;
      color: white;
      overflow-x: scroll;
      &-top {
        display: flex;
        margin-bottom: 0.3125rem;
        justify-content: space-between;
      }
      &-bottom {
        display: flex;
        font-size: 0.75rem;
        img {
          width: 2rem;
          height: 2rem;
          margin-right: 0.625rem;
        }
      }
    }
  }
}

.van-swipe-cell__right {
  display: flex;
}

.rankinglist {
  display: flex;
  flex-direction: column;
  &-top {
    display: flex;
    justify-content: space-between;
    &-left {
      color: white;
    }
    &-right {
      color: #999;
      display: flex;
      align-items: center;
      font-size: 0.875rem;
    }
  }
  &-bottom {
    display: flex;
    flex-direction: column;
    &-list {
      display: flex;
      font-size: 0.875rem;
      align-items: center;
      padding: 0.625rem 0;
      border-bottom: 1px solid #999;
      img {
        width: 4rem;
        height: 4rem;
        margin: 0 0.625rem;
      }
      &-nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: white;
        &-color {
          color: #999;
          display: flex;
          justify-content: space-between;
          font-size: 0.625rem;
        }
      }
    }
  }
}
</style>