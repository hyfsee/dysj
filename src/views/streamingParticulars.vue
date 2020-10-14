<template>
  <!-- 直播详情 -->
  <div>
    <div class="top">
      <div class="top-left">
        <img
          style="width: 100%; height: 100%; border-radius: 50%"
          :src="nav.user_img"
          alt=""
        />
      </div>
      <div class="top-right">
        <div class="top-right-top">
          <div class="top-right-top-txt">{{ nav.user_name }}</div>
          <div>感谢大家的祝福</div>
        </div>
        <div class="top-right-bottom">
          <div>抖音号:{{ nav.user_id }}</div>
          <div>粉丝数:{{ nav.user_fans }}</div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-left">
        <img style="width: 100%; height: 100%" :src="nav.online_img" alt="" />
      </div>
      <div class="center-right">
        <div class="center-right-txt">{{ nav.online_title }}</div>
        <div class="center-right-span">开播时间:{{ nav.create_time }}</div>
        <div class="center-right-span">开播时长:{{ nav.online_time }}</div>
        <div class="center-right-span">平均停留:--</div>
        <div class="center-right-span">
          直播分类:
          <div class="center-right-span-style">{{ nav.online_sort }}</div>
        </div>
      </div>
    </div>
    <div class="moods">
      <div class="moods-top">人气数据</div>
      <div class="podacster">
        <div>
          <div class="podacster-num">{{ nav.online_num }}</div>
          <div>观看人数</div>
        </div>
        <div>
          <div class="podacster-num">{{ nav.online_max }}</div>
          <div>人数峰值</div>
        </div>
        <div>
          <div class="podacster-num">--</div>
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
        <div class="moods-bottom-bottom">
          <img
            style="width: 100%; height: 100%"
            src="../assets/a1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <Tab :tab="tab" />
    <div class="one">
      <div class="one-top">
        <div class="one-top-top">
          <div class="one-top-top-item">
            <div style="font-size: 0.875rem">{{ nav.online_num }}</div>
            <div>观看人数</div>
          </div>
          <div class="one-top-top-item">
            <div style="font-size: 0.875rem">{{ nav.online_max }}</div>
            <div>人气峰值</div>
          </div>
          <div class="one-top-top-item">
            <div style="font-size: 0.875rem">--</div>
            <div>平均在线</div>
          </div>
          <div class="one-top-top-item">
            <div style="font-size: 0.875rem">{{ nav.online_yl }}</div>
            <div>本场音浪</div>
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
        <div class="one-search-item"><van-icon name="filter-o" />筛选</div>
      </div>
      <div class="one-bottom">
        <div class="one-bottom-item">
          <div class="one-bottom-item-top">
            <div class="one-bottom-item-top-left">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />
            </div>
            <div class="one-bottom-item-top-right">
              <div class="one-bottom-item-top-right-top">
                10.11直播商品231231
              </div>
              <div class="one-bottom-item-top-right-center">
                <div style="color: green">直播价:$238.00</div>
                <div style="color: red">卷后价:$238.00</div>
              </div>
              <div class="one-bottom-item-top-right-bottom">
                上架时间:10-11 11:30:59
              </div>
            </div>
          </div>
          <div class="one-bottom-item-bottom">
            <div>预估销售额13.8w</div>
            <div>预估销量920</div>
          </div>
        </div>
        <div class="one-bottom-item">
          <div class="one-bottom-item-top">
            <div class="one-bottom-item-top-left">
              <img
                style="width: 100%; height: 100%"
                src="../assets/a1.jpg"
                alt=""
              />
            </div>
            <div class="one-bottom-item-top-right">
              <div class="one-bottom-item-top-right-top">
                10.11直播商品231231
              </div>
              <div class="one-bottom-item-top-right-center">
                <div style="color: green">直播价:$238.00</div>
                <div style="color: red">卷后价:$238.00</div>
              </div>
              <div class="one-bottom-item-top-right-bottom">
                上架时间:10-11 11:30:59
              </div>
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
        <div style="margin-top: 0.625rem" class="two-center-top">
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
        <div class="two-cumulative-bottom">
          <img
            style="width: 100%; height: 100%"
            src="../assets/a1.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="two-cumulative">
        <div class="two-cumulative-top">累计观看</div>
        <div class="two-cumulative-center">
          <div class="two-cumulative-center-left">观看人数 人气峰值</div>
          <div class="two-cumulative-center-right">总量</div>
        </div>
        <div class="two-cumulative-bottom">
          <img
            style="width: 100%; height: 100%"
            src="../assets/a1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="three">
      <!-- 观众来源 -->
      <div class="three-source">
        <div class="three-source-top">观众来源</div>
        <div class="three-source-bottom">
          <img
            style="width: 100%; height: 100%"
            src="../assets/a1.jpg"
            alt=""
          />
        </div>
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
    Search,
  },
  data() {
    return {
      tab: ["带货数据", "人气数据", "观众画像", "观战互动"],
      content: "输入商品关键词",
      nav: {
        user_img: require("../assets/a1.jpg"),
        user_id: 1,
        user_name: "阁主",
        user_fans: "232粉丝数",
        online_title: "浮力专场10月7日婚礼",
        online_img: require("../assets/a1.jpg"),
        create_time: "2020-10-2",
        online_time: "30秒时长",
        online_sort: "吃分类",
        online_num: "232观看人数",
        online_max: "232人数峰值",
        online_addfans: "232新增粉丝",
        online_addlink: "232点赞",
        online_yl: "音浪",
      },
    };
  },
};
</script>

<style scoped lang='less'>
.top {
  display: flex;
  padding: 0.625rem;
  border: 0.0625rem solid #777;
  &-left {
    width: 4.375rem;
    height: 4.375rem;
    background-color: #fff;
    color: black;
    margin-right: 0.625rem;
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
        margin-right: 0.625rem;
      }
    }
    &-bottom {
      display: flex;
      font-size: 0.875rem;
      color: #777;
      justify-content: space-between;
    }
  }
}

.center {
  display: flex;
  padding: 1.25rem 0.625rem;
  margin-top: 1.25rem;
  border: 0.0625rem solid #777;
  &-left {
    width: 4.375rem;
    height: 6.25rem;
    background-color: #fff;
    color: black;
    margin-right: 0.625rem;
  }
  &-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &-txt {
      margin-bottom: 0.625rem;
    }
    &-span {
      font-size: 0.75rem;
      color: #777;
      display: flex;
      align-items: center;
      &-style {
        background-color: green;
        color: white;
        padding: 0.0625rem 0.25rem;
      }
      &-color {
        background-color: pink;
        color: white;
        padding: 0.0625rem 0.25rem;
        margin-left: 0.625rem;
      }
    }
  }
}
.moods {
  padding: 1.25rem 0.625rem;
  margin-top: 1.25rem;
  border: 0.0625rem solid #777;
  &-top {
    display: flex;
  }
  .podacster {
    display: flex;
    font-size: 0.75rem;
    margin-top: 1.25rem;
    justify-content: space-around;
    width: 100%;
    &-num {
      font-size: 1rem;
      color: green;
    }
  }
  &-bottom {
    &-top {
      display: flex;
      justify-content: space-between;
      padding: 0.625rem 0;
      &-left {
        display: flex;
        align-items: center;
        div {
          margin: 0 0.5rem 0 0.1875rem;
        }
      }
    }
    &-bottom {
      height: 12.5rem;
      background-color: #fff;
      color: black;
    }
  }
}
.one {
  padding: 0.9375rem 0.625rem;
  border: 0.0625rem solid #777;
  margin-top: 0.625rem;
  &-top {
    &-top {
      display: flex;
      &-item {
        width: 25%;
        font-size: 0.75rem;
      }
    }
    &-bottom {
      display: flex;
      background-color: #fff;
      color: green;
      padding: 0.3125rem 0;
      margin-top: 0.9375rem;
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
      padding: 1.25rem 0;
      border-bottom: 0.0625rem solid #777;
      &-top {
        display: flex;
        &-left {
          width: 6.25rem;
          height: 6.25rem;
          background-color: #fff;
          color: black;
          margin-right: 0.625rem;
        }
        &-right {
          align-items: flex-start;
          flex: 1;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          font-size: 0.875rem;
          &-top {
            font-size: 1rem;
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
        margin-top: 0.625rem;
      }
    }
  }
}
.two {
  padding: 0.9375rem 0.625rem;
  border: 0.0625rem solid #777;
  &-top {
    display: flex;
    &-item {
      width: 25%;
    }
  }
  &-center {
    margin-top: 1.25rem;
    border: 0.0625rem solid #777;
    padding: 0.625rem 0;
    &-top {
      display: flex;
      justify-content: space-evenly;
    }
  }
  &-cumulative {
    margin-top: 1.25rem;
    &-top {
      display: flex;
    }
    &-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.9375rem 0;
      &-left {
        display: flex;
        align-items: center;
      }
    }
    &-bottom {
      height: 12.5rem;
      background-color: #fff;
      color: black;
    }
  }
}
.three {
  margin-top: 1.25rem;
  padding: 0.9375rem 0.625rem;
  border: 0.0625rem solid #777;
  &-source {
    &-top {
      display: flex;
    }
    &-bottom {
      height: 12.5rem;
      background-color: #fff;
      color: black;
      margin-top: 0.625rem;
    }
  }
  &-gender {
    margin-top: 1.25rem;
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
        margin-top: 0.625rem;
      }
    }
  }
}
</style>