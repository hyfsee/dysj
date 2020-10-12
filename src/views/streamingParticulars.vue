<template>
  <!-- 直播详情 -->
  <div>
    <div class="top">
      <div class="top-left">img</div>
      <div class="top-right">
        <div class="top-right-top">
          <div class="top-right-top-txt">阁主</div>
          <div>感谢大家的祝福</div>
        </div>
        <div class="top-right-bottom">
          <div>抖音号:123456789</div>
          <div>粉丝数:42.3w</div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-left">img</div>
      <div class="center-right">
        <div class="center-right-txt">浮力专场10月7日婚礼</div>
        <div class="center-right-span">开播时间:2020-10-10</div>
        <div class="center-right-span">开播时长:17小时5分5秒</div>
        <div class="center-right-span">平均停留:2小时5分52秒</div>
        <div class="center-right-span">
          直播分类:
          <div class="center-right-span-style">珠宝配饰</div>
          <div class="center-right-span-color">男装女装</div>
        </div>
      </div>
    </div>
    <div class="moods">
      <div class="moods-top">人气数据</div>
      <div class="podacster">
        <div>
          <div class="podacster-num">46.2w</div>
          <div>观看人数</div>
        </div>
        <div>
          <div class="podacster-num">13.0w</div>
          <div>人数峰值</div>
        </div>
        <div>
          <div class="podacster-num">7.5w</div>
          <div>平均在线人数</div>
        </div>
      </div>
      <div class="moods-bottom">
        <div class="moods-bottom-top">
          <div class="moods-bottom-top-left">
            <van-icon name="browsing-history" />
            <div>观看人数</div>
            <van-icon name="browsing-history" />
            <div>人气峰值</div>
          </div>
          <div class="moods-bottom-top-right">总量</div>
        </div>
        <div class="moods-bottom-bottom">img</div>
      </div>
    </div>
    <Tab :tab="tab" />
    <div class="one">
      <div class="one-top">
        <div class="one-top-top">
          <div class="one-top-top-item">
            <div>407.3w</div>
            <div>销售额</div>
          </div>
          <div class="one-top-top-item">
            <div>407.3w</div>
            <div>销售额</div>
          </div>
        </div>
        <div class="one-top-bottom">
          <div>客单价393.6</div>
          <div>用户人均价值10.3</div>
        </div>
      </div>
      <div class="one-search">
        <div class="one-search-search">
          <Search :content="content" />
        </div>
        <div class="one-search-item">
          <van-icon name="filter-o" />筛选
        </div>
      </div>
      <div class="one-bottom">
        <div class="one-bottom-item">
          <div class="one-bottom-item-top">
            <div class="one-bottom-item-top-left">img</div>
            <div class="one-bottom-item-top-right">
              <div class="one-bottom-item-top-right-top">10.11直播商品231231</div>
              <div class="one-bottom-item-top-right-center">
                <div style="color:green">直播价:$238.00</div>
                <div style="color:red">卷后价:$238.00</div>
              </div>
              <div class="one-bottom-item-top-right-bottom">上架时间:10-11 11:30:59</div>
            </div>
          </div>
          <div class="one-bottom-item-bottom">
            <div>预估销售额13.8w</div>
            <div>预估销量920</div>
          </div>
        </div>
        <div class="one-bottom-item">
          <div class="one-bottom-item-top">
            <div class="one-bottom-item-top-left">img</div>
            <div class="one-bottom-item-top-right">
              <div class="one-bottom-item-top-right-top">10.11直播商品231231</div>
              <div class="one-bottom-item-top-right-center">
                <div style="color:green">直播价:$238.00</div>
                <div style="color:red">卷后价:$238.00</div>
              </div>
              <div class="one-bottom-item-top-right-bottom">上架时间:10-11 11:30:59</div>
            </div>
          </div>
          <div class="one-bottom-item-bottom">
            <div>预估销售额13.8w</div>
            <div>预估销量920</div>
          </div>
        </div>
      </div>
    </div>
    <div class="two">
      <div class="two-top">
        <div class="two-top-item">
          <div>52.5w</div>
          <div>观看人数</div>
        </div>
        <div class="two-top-item">
          <div>52.5w</div>
          <div>观看人数</div>
        </div>
        <div class="two-top-item">
          <div>52.5w</div>
          <div>观看人数</div>
        </div>
      </div>
      <div class="two-center">
        <div class="two-center-top">
          <div>新增粉丝2.7w</div>
          <div>粉丝转化率5.175</div>
        </div>
        <div style="margin-top:10px" class="two-center-top">
          <div>本场点赞19.8w</div>
          <div>送礼人数7993</div>
        </div>
      </div>
      <!-- 累计观看 -->
      <div class="two-cumulative">
        <div class="two-cumulative-top">累计观看</div>
        <div class="two-cumulative-center">
          <div class="two-cumulative-center-left">观看人数 人气峰值</div>
          <div class="two-cumulative-center-right">总量</div>
        </div>
        <div class="two-cumulative-bottom">img</div>
      </div>
      <div class="two-cumulative">
        <div class="two-cumulative-top">累计观看</div>
        <div class="two-cumulative-center">
          <div class="two-cumulative-center-left">观看人数 人气峰值</div>
          <div class="two-cumulative-center-right">总量</div>
        </div>
        <div class="two-cumulative-bottom">img</div>
      </div>
    </div>
    <div class="three">
      <!-- 观众来源 -->
      <div class="three-source">
        <div class="three-source-top">观众来源</div>
        <div class="three-source-bottom">img</div>
      </div>
      <!-- 观众性别 -->
      <div class="three-gender">
        <div class="three-gender-top">性别分布</div>
        <div class="three-gender-bottom">
          <div class="three-gender-bottom-top">
            <div>女:80.27%</div>
            <div>男:19.73%</div>
          </div>
          <div class="three-gender-bottom-bottom">进度条</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "../components/Tab";
import Search from "../components/Search";
export default {
  components: {
    Tab,
    Search
  },
  data() {
    return {
      tab: ["带货数据", "人气数据", "观众画像", "观战互动"],
      content: "输入商品关键词"
    };
  }
};
</script>

<style scoped lang='less'>
.top {
  display: flex;
  padding: 10px;
  border: 1px solid #777;
  &-left {
    width: 70px;
    height: 70px;
    background-color: #fff;
    color: black;
    margin-right: 10px;
  }
  &-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    &-top {
      display: flex;
      align-items: center;
      &-txt {
        margin-right: 10px;
      }
    }
    &-bottom {
      display: flex;
      font-size: 14px;
      color: #777;
      justify-content: space-between;
    }
  }
}

.center {
  display: flex;
  padding: 20px 10px;
  margin-top: 20px;
  border: 1px solid #777;
  &-left {
    width: 70px;
    height: 100px;
    background-color: #fff;
    color: black;
    margin-right: 10px;
  }
  &-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &-txt {
      margin-bottom: 10px;
    }
    &-span {
      font-size: 12px;
      color: #777;
      display: flex;
      align-items: center;
      &-style {
        background-color: green;
        color: white;
        padding: 1px 4px;
      }
      &-color {
        background-color: pink;
        color: white;
        padding: 1px 4px;
        margin-left: 10px;
      }
    }
  }
}
.moods {
  padding: 20px 10px;
  margin-top: 20px;
  border: 1px solid #777;
  &-top {
    display: flex;
  }
  .podacster {
    display: flex;
    font-size: 0.75rem;
    margin-top: 20px;
    justify-content: space-around;
    width: 100%;
    &-num {
      font-size: 16px;
      color: green;
    }
  }
  &-bottom {
    &-top {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      &-left {
        display: flex;
        align-items: center;
        div {
          margin: 0 8px 0 3px;
        }
      }
    }
    &-bottom {
      height: 200px;
      background-color: #fff;
      color: black;
    }
  }
}
.one {
  padding: 15px 10px;
  border: 1px solid #777;
  margin-top: 10px;
  &-top {
    &-top {
      display: flex;
      &-item {
        width: 25%;
      }
    }
    &-bottom {
      display: flex;
      background-color: #fff;
      color: green;
      padding: 5px 0;
      margin-top: 15px;
      justify-content: space-evenly;
    }
  }
  &-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-search {
      flex: 1;
    }
    &-item {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &-bottom {
    &-item {
      padding: 20px 0;
      border-bottom: 1px solid #777;
      &-top {
        display: flex;
        &-left {
          width: 100px;
          height: 100px;
          background-color: #fff;
          color: black;
          margin-right: 10px;
        }
        &-right {
          align-items: flex-start;
          flex: 1;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          font-size: 14px;
          &-top {
            font-size: 16px;
          }
          &-center {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
          &-bottom {
            color: #777;
          }
        }
      }
      &-bottom {
        display: flex;
        justify-content: space-evenly;
        background-color: #fff;
        color: black;
        margin-top: 10px;
      }
    }
  }
}
.two {
  padding: 15px 10px;
  border: 1px solid #777;
  &-top {
    display: flex;
    &-item {
      width: 25%;
    }
  }
  &-center {
    margin-top: 20px;
    border: 1px solid #777;
    padding: 10px 0;
    &-top {
      display: flex;
      justify-content: space-evenly;
    }
  }
  &-cumulative {
    margin-top: 20px;
    &-top {
      display: flex;
    }
    &-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
      &-left {
        display: flex;
        align-items: center;
      }
    }
    &-bottom {
      height: 200px;
      background-color: #fff;
      color: black;
    }
  }
}
.three {
  margin-top: 20px;
  padding: 15px 10px;
  border: 1px solid #777;
  &-source {
    &-top {
      display: flex;
    }
    &-bottom {
      height: 200px;
      background-color: #fff;
      color: black;
      margin-top: 10px;
    }
  }
  &-gender {
    margin-top: 20px;
    &-top {
      display: flex;
    }
    &-bottom {
      &-top {
        display: flex;
        justify-content: space-evenly;
      }
      &-bottom {
        background-color: #fff;
        color: black;
        margin-top: 10px;
      }
    }
  }
}
</style>