<template>
  <div>
    <!-- 商品详情 -->
    <div class="top">
      <div class="top-left">img</div>
      <div class="top-right">
        <div class="top-right-top">洁柔face抽纸3层120抽20包</div>
        <div class="top-right-bottom">
          <div class="top-right-bottom-left">$59.9</div>
          <div class="top-right-bottom-center">$46.6</div>
          <div class="top-right-bottom-right">
            <div>价格趋势</div>
            <van-icon name="arrow-down" />
          </div>
        </div>
      </div>
    </div>

    <!-- 数据概览 -->
    <div class="overview">
      <div class="overview-top">数据概览</div>
      <div class="overview-bottom">
        <div class="overview-bottom-item">
          <div class="overview-bottom-item-top">58.2w</div>
          <div class="overview-bottom-item-bottom">总访客量</div>
        </div>
        <div class="overview-bottom-item">
          <div class="overview-bottom-item-top">58.2w</div>
          <div class="overview-bottom-item-bottom">总访客量</div>
        </div>
        <div class="overview-bottom-item">
          <div class="overview-bottom-item-top">58.2w</div>
          <div class="overview-bottom-item-bottom">总访客量</div>
        </div>
        <div class="overview-bottom-item">
          <div class="overview-bottom-item-top">58.2w</div>
          <div class="overview-bottom-item-bottom">总访客量</div>
        </div>
        <div class="overview-bottom-item">
          <div class="overview-bottom-item-top">58.2w</div>
          <div class="overview-bottom-item-bottom">总访客量</div>
        </div>
        <div class="overview-bottom-item">
          <div class="overview-bottom-item-top">58.2w</div>
          <div class="overview-bottom-item-bottom">总访客量</div>
        </div>
      </div>
    </div>

    <!-- 数据分析 -->
    <div class="analyse">
      <Tab :tab="tab" />
      <!-- 基础数据分析 -->
      <div class="analyse-one">
        <div class="analyse-one-top">昨日新增</div>
        <div class="analyse-one-bottom">
          <div class="analyse-one-bottom-item">
            <div class="analyse-one-bottom-item-style">150</div>
            <div>抖音浏览量</div>
          </div>
          <div class="analyse-one-bottom-item">
            <div class="analyse-one-bottom-item-style">--</div>
            <div>抖音销量</div>
          </div>
          <div class="analyse-one-bottom-item">
            <div class="analyse-one-bottom-item-style">--</div>
            <div>关联视频</div>
          </div>
          <div class="analyse-one-bottom-item">
            <div class="analyse-one-bottom-item-style">--</div>
            <div>关联直播</div>
          </div>
        </div>
        <Tab :tab="tab1" />
        <div class="analyse-one-tab">暂无数据</div>
        <div class="analyse-one-proportion">
          <div class="analyse-one-proportion-top">
            近30天发布作品在24小时时间占比
          </div>
          <div class="analyse-one-proportion-bottom">暂无数据</div>
        </div>
        <div class="analyse-one-portrayal">
          <div class="analyse-one-portrayal-top">
            观众画像
          </div>
          <div class="analyse-one-portrayal-bottom">暂无数据</div>
        </div>
      </div>
      <!-- 直播分析 -->
      <div class="analyse-two">
        <div class="analyse-two-top">直播分析</div>
        <Search :content="content2" />
        <div class="analyse-two-bottom">
          <div class="analyse-two-bottom-top">
            <div class="analyse-two-bottom-top-left">
              全部<van-icon name="arrow-down" />
            </div>
            <div class="analyse-two-bottom-top-right">
              人数峰值<van-icon name="arrow-down" />
            </div>
          </div>
          <Tab :tab="tab2" />
          <div class="analyse-two-bottom-bottom">
            <div class="analyse-two-bottom-bottom-item">
              <div class="analyse-two-bottom-bottom-item-top">
                <div class="analyse-two-bottom-bottom-item-top-left">img</div>
                <div class="analyse-two-bottom-bottom-item-top-right">
                  <div class="analyse-two-bottom-bottom-item-top-right-top">
                    广东夫妇生活日用品专场来啦
                  </div>
                  <div class="analyse-two-bottom-bottom-item-top-right-center">
                    <div>2020-09-27</div>
                    <div>14:00:21</div>
                    <div>搞笑</div>
                  </div>
                  <div class="analyse-two-bottom-bottom-item-top-right-bottom">
                    <div
                      class="analyse-two-bottom-bottom-item-top-right-bottom-img"
                    >
                      img
                    </div>
                    <div>大狼狗邓建鹏&验真夫妇</div>
                    <div>4303.8w</div>
                  </div>
                </div>
              </div>
              <div class="analyse-two-bottom-bottom-item-bottom">
                <div class="analyse-two-bottom-bottom-item-bottom-left">
                  人数峰值4.7w
                </div>
                <div class="analyse-two-bottom-bottom-item-bottom-right">
                  直播销量64.7w
                </div>
              </div>
            </div>
            <div class="analyse-two-bottom-bottom-item">
              <div class="analyse-two-bottom-bottom-item-top">
                <div class="analyse-two-bottom-bottom-item-top-left">img</div>
                <div class="analyse-two-bottom-bottom-item-top-right">
                  <div class="analyse-two-bottom-bottom-item-top-right-top">
                    广东夫妇生活日用品专场来啦
                  </div>
                  <div class="analyse-two-bottom-bottom-item-top-right-center">
                    <div>2020-09-27</div>
                    <div>14:00:21</div>
                    <div>搞笑</div>
                  </div>
                  <div class="analyse-two-bottom-bottom-item-top-right-bottom">
                    <div
                      class="analyse-two-bottom-bottom-item-top-right-bottom-img"
                    >
                      img
                    </div>
                    <div>大狼狗邓建鹏&验真夫妇</div>
                    <div>4303.8w</div>
                  </div>
                </div>
              </div>
              <div class="analyse-two-bottom-bottom-item-bottom">
                <div class="analyse-two-bottom-bottom-item-bottom-left">
                  人数峰值4.7w
                </div>
                <div class="analyse-two-bottom-bottom-item-bottom-right">
                  直播销量64.7w
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 视频分析 -->
      <div class="analyse-three">
        <div class="analyse-three-top">视频分析</div>
        <Search :content="content3" />
        <div class="analyse-three-bottom">
          <div class="analyse-three-bottom-top">
            <div class="analyse-three-bottom-top-left">
              全部<van-icon name="arrow-down" />
            </div>
            <div class="analyse-three-bottom-top-right">
              <van-checkbox v-model="checked"></van-checkbox>屏蔽已删除视频
            </div>
          </div>
          <div class="analyse-three-bottom-bottom">暂无数据</div>
        </div>
      </div>
      <!-- 播主分析 -->
      <div class="analyse-four">
        <div class="analyse-four-top">播主分析</div>
        <Search :content="content4" />
        <div class="analyse-four-bottom">
          <div class="analyse-four-bottom-top">
            关联视频数<van-icon name="arrow-down" />
          </div>
          <div class="analyse-four-bottom-bottom">
            <div class="analyse-four-bottom-bottom-item">
              <div class="analyse-four-bottom-bottom-item-left">
                <div class="analyse-four-bottom-bottom-item-left-img">img</div>
                <div class="analyse-four-bottom-bottom-item-left-txt">
                  <div class="analyse-four-bottom-bottom-item-left-txt-top">
                    顶呱呱给我改价
                  </div>
                  <div class="analyse-four-bottom-bottom-item-left-txt-bottom">
                    粉丝总数:2042
                  </div>
                </div>
              </div>
              <div class="analyse-four-bottom-bottom-item-right">
                <div class="analyse-four-bottom-bottom-item-right-item">
                  <div>0</div>
                  <div class="analyse-four-bottom-bottom-item-right-item-style">
                    关联视频
                  </div>
                </div>
                <div class="analyse-four-bottom-bottom-item-right-item">
                  <div>0</div>
                  <div class="analyse-four-bottom-bottom-item-right-item-style">
                    关联直播
                  </div>
                </div>
              </div>
            </div>
            <div class="analyse-four-bottom-bottom-item">
              <div class="analyse-four-bottom-bottom-item-left">
                <div class="analyse-four-bottom-bottom-item-left-img">img</div>
                <div class="analyse-four-bottom-bottom-item-left-txt">
                  <div class="analyse-four-bottom-bottom-item-left-txt-top">
                    顶呱呱给我改价
                  </div>
                  <div class="analyse-four-bottom-bottom-item-left-txt-bottom">
                    粉丝总数:2042
                  </div>
                </div>
              </div>
              <div class="analyse-four-bottom-bottom-item-right">
                <div class="analyse-four-bottom-bottom-item-right-item">
                  <div>0</div>
                  <div class="analyse-four-bottom-bottom-item-right-item-style">
                    关联视频
                  </div>
                </div>
                <div class="analyse-four-bottom-bottom-item-right-item">
                  <div>0</div>
                  <div class="analyse-four-bottom-bottom-item-right-item-style">
                    关联直播
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      tab: ["基础数据", "直播分析", "视频分析", "主播分析"],
      tab1: ["抖音销量", "视频与直播"],
      tab2: ["昨天", "今天", "15天", "30天"],
      content2: "搜索你要找的直播",
      content3: "搜索你要找的热门视频",
      content4: "搜索你要找的播主",
      //复选框
      checked: true,
    };
  },
};
</script>

<style scoped lang='less'>
.top {
  display: flex;
  padding: 20px 50px 20px 20px;
  &-left {
    width: 50px;
    height: 50px;
    background-color: #fff;
    color: black;
    margin-right: 10px;
  }
  &-right {
    display: flex;
    flex-direction: column;
    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      &-left {
        color: red;
        height: 21px;
        line-height: 21px;
      }
      &-center {
        text-decoration: line-through;
        color: #777;
        height: 21px;
        line-height: 21px;
      }
      &-right {
        display: flex;
        align-items: center;
        font-size: 14px;
        height: 21px;
        line-height: 21px;
        color: green;
        .van-icon {
          margin-left: 5px;
        }
      }
    }
  }
}

.overview {
  display: flex;
  flex-direction: column;
  &-top {
    display: flex;
  }
  &-bottom {
    display: flex;
    flex-wrap: wrap;
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 25%;
      padding: 10px;
      &-top {
        color: green;
      }
      &-bottom {
        font-size: 14px;
      }
    }
  }
}

.analyse {
  &-one {
    margin-top: 10px;
    padding: 15px 10px;
    border: 1px solid #777;
    &-top {
      display: flex;
    }
    &-bottom {
      display: flex;
      padding: 20px 0;
      &-item {
        width: 25%;
        font-size: 14px;
        color: #777;
        &-style {
          color: white;
          font-size: 16px;
          margin-bottom: 5px;
        }
      }
    }
    /deep/ .van-tabs {
      width: 200px;
      /deep/ .van-tab {
        border: 1px solid #777;
        margin-left: -1px;
        &:nth-child(1) {
          margin-left: 0;
        }
      }
      /deep/ .van-tabs__line {
        display: none;
      }
    }
    &-tab {
      height: 200px;
      background-color: #fff;
      color: black;
      margin-top: 10px;
    }
    &-proportion {
      margin-top: 40px;
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
    &-portrayal {
      margin-top: 40px;
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
  }
  &-two {
    border: 1px solid #777;
    margin-top: 20px;
    padding: 15px 10px;
    &-top {
      display: flex;
    }
    .van-tabs {
      width: 50%;
      margin-top: 10px;
      /deep/ .van-tab {
        border: 1px solid #777;
        margin-left: -1px;
        &:nth-child(1) {
          margin-left: 0;
        }
      }
      /deep/ .van-tabs__line {
        display: none;
      }
    }
    &-bottom {
      &-top {
        display: flex;
        justify-content: space-between;
        &-left {
          display: flex;
          align-items: center;
          .van-icon {
            margin-left: 3px;
          }
        }
        &-right {
          display: flex;
          align-items: center;
          .van-icon {
            margin-left: 3px;
          }
        }
      }
      &-bottom {
        &-item {
          padding: 15px 0;
          border-bottom: 1px solid #777;
          &-top {
            display: flex;
            &-left {
              width: 60px;
              height: 70px;
              background-color: #fff;
              color: black;
              margin-right: 10px;
            }
            &-right {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              font-size: 14px;
              color: #777;
              &-top {
                font-size: 16px;
                color: white;
                margin-bottom: 8px;
              }
              &-center {
                display: flex;
                align-items: center;
                div {
                  margin-right: 8px;
                }
              }
              &-bottom {
                display: flex;
                align-items: center;
                div {
                  margin-right: 8px;
                }
                &-img {
                  width: 20px;
                  height: 20px;
                  border-radius: 20px;
                  background-color: #fff;
                  color: black;
                }
              }
            }
          }
          &-bottom {
            display: flex;
            margin-top: 10px;
            font-size: 14px;
            div {
              flex: 1;
              padding: 3px;
              background-color: green;
            }
            &-left {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
  &-three {
    border: 1px solid #777;
    margin-top: 20px;
    padding: 15px 10px;
    &-top {
      display: flex;
    }
    &-bottom {
      font-size: 14px;
      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-left {
          display: flex;
          align-items: center;
        }
        &-right {
          display: flex;
          align-items: center;
          .van-checkbox {
            margin-right: 3px;
          }
        }
      }
      &-bottom {
        height: 100px;
        background-color: #fff;
        color: black;
        margin-top: 10px;
      }
    }
  }
  &-four {
    margin-top: 20px;
    border: 1px solid #777;
    padding: 15px 10px;
    &-top {
      display: flex;
    }
    &-bottom {
      display: flex;
      flex-direction: column;
      &-top {
        display: flex;
        align-items: center;
      }
      &-bottom {
        display: flex;
        flex-direction: column;
        &-item {
          display: flex;
          justify-content: space-between;
          padding: 20px 10px;
          border-bottom: 1px solid #777;
          &-left {
            display: flex;
            &-img {
              width: 50px;
              height: 50px;
              border-radius: 50px;
              background-color: #fff;
              color: black;
              margin-right: 10px;
            }
            &-txt {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              &-bottom {
                color: #777;
                font-size: 14px;
                margin-top: 8px;
              }
            }
          }
          &-right {
            display: flex;
            &-item {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              margin-left: 10px;
              &-style {
                font-size: 12px;
                color: #777;
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>