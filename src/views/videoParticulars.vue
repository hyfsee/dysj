<template>
  <div>
    <div class="nav">
      <div class="nav-top">
        <div class="nav-top-left">img</div>
        <div class="nav-top-right">
          <div class="nav-top-right-top">
            最高礼遇,迎'战役'英雄!最高礼遇,迎'战役'英雄最高礼遇
          </div>
          <div class="nav-top-right-center">
            <div class="nav-top-right-center-left">
              <div class="nav-top-right-center-left-img">img</div>
              央视新闻
            </div>
            <div class="nav-top-right-center-right">09月08日</div>
          </div>
          <div class="nav-top-right-bottom">
            <div class="nav-top-right-bottom-left">1231.8w</div>
            <div class="nav-top-right-bottom-center">45.1w</div>
            <div class="nav-top-right-bottom-right">21.2w</div>
          </div>
        </div>
      </div>
      <div class="nav-bottom">
        <div class="nav-bottom-style">播放</div>
        <div>收藏</div>
      </div>
    </div>

    <router-link to="/podcastParticulars">
      <div class="logoNav">
        <div class="logoNav-left">img</div>
        <div class="logoNav-center">
          <div class="logoNav-center-top">央视新闻</div>
          <div class="logoNav-center-bottom">
            <div class="logoNav-center-bottom-left">抖音号:53468763</div>
            <div class="logoNav-center-bottom-right">粉丝数:9731.9w</div>
          </div>
        </div>
        <van-icon name="arrow" class="logoNav-right" />
      </div>
    </router-link>

    <div class="comment">
      <div class="comment-top">
        <div class="comment-top-top">
          <div class="comment-top-top-left">评论热词</div>
          <div class="comment-top-top-right">45.1w</div>
        </div>
        <div class="comment-top-bottom">
          <div>致敬</div>
          <div>致敬</div>
          <div>致敬</div>
          <div>致敬</div>
          <div>致敬</div>
        </div>
      </div>
      <div class="comment-bottom">
        <div class="comment-bottom-top">全部评论</div>
        <div class="comment-bottom-bottom">
          <div class="comment-bottom-bottom-item">
            <div class="comment-bottom-bottom-item-top">
              <div class="comment-bottom-bottom-item-top-left">
                <div class="comment-bottom-bottom-item-top-left-img">img</div>
                筠连融媒
              </div>
              <div class="comment-bottom-bottom-item-top-right">
                <van-icon name="like-o" />196436
              </div>
            </div>
            <div class="comment-bottom-bottom-item-center">
              战役英雄更是中国英雄,这才是和是和平年代我们是和平年代我们平年代我们
            </div>
            <div class="comment-bottom-bottom-item-bottom">
              2020年09月08日09:14
            </div>
          </div>
          <div class="comment-bottom-bottom-item">
            <div class="comment-bottom-bottom-item-top">
              <div class="comment-bottom-bottom-item-top-left">
                <div class="comment-bottom-bottom-item-top-left-img">img</div>
                筠连融媒
              </div>
              <div class="comment-bottom-bottom-item-top-right">
                <van-icon name="like-o" />196436
              </div>
            </div>
            <div class="comment-bottom-bottom-item-center">
              战役英雄更是中国英雄,这才是和是和平年代我们是和平年代我们平年代我们
            </div>
            <div class="comment-bottom-bottom-item-bottom">
              2020年09月08日09:14
            </div>
          </div>
          <div class="comment-bottom-bottom-item">
            <div class="comment-bottom-bottom-item-top">
              <div class="comment-bottom-bottom-item-top-left">
                <div class="comment-bottom-bottom-item-top-left-img">img</div>
                筠连融媒
              </div>
              <div class="comment-bottom-bottom-item-top-right">
                <van-icon name="like-o" />196436
              </div>
            </div>
            <div class="comment-bottom-bottom-item-center">
              战役英雄更是中国英雄,这才是和是和平年代我们是和平年代我们平年代我们
            </div>
            <div class="comment-bottom-bottom-item-bottom">
              2020年09月08日09:14
            </div>
          </div>
          <div class="comment-bottom-bottom-item">
            <div class="comment-bottom-bottom-item-top">
              <div class="comment-bottom-bottom-item-top-left">
                <div class="comment-bottom-bottom-item-top-left-img">img</div>
                筠连融媒
              </div>
              <div class="comment-bottom-bottom-item-top-right">
                <van-icon name="like-o" />196436
              </div>
            </div>
            <div class="comment-bottom-bottom-item-center">
              战役英雄更是中国英雄,这才是和是和平年代我们是和平年代我们平年代我们
            </div>
            <div class="comment-bottom-bottom-item-bottom">
              2020年09月08日09:14
            </div>
          </div>
          <div class="comment-bottom-bottom-item">
            <div class="comment-bottom-bottom-item-top">
              <div class="comment-bottom-bottom-item-top-left">
                <div class="comment-bottom-bottom-item-top-left-img">img</div>
                筠连融媒
              </div>
              <div class="comment-bottom-bottom-item-top-right">
                <van-icon name="like-o" />196436
              </div>
            </div>
            <div class="comment-bottom-bottom-item-center">
              战役英雄更是中国英雄,这才是和是和平年代我们是和平年代我们平年代我们
            </div>
            <div class="comment-bottom-bottom-item-bottom">
              2020年09月08日09:14
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.nav {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid white;
  &-top {
    display: flex;
    &-left {
      width: 70px;
      height: 100px;
      background-color: #fff;
      color: black;
      margin-right: 10px;
    }
    &-right {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      flex: 1;
      &-top {
        font-size: 16px;
        text-align: left;
      }
      &-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #777;
        margin: 10px 0;
        &-left {
          display: flex;
          align-items: center;
          &-img {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            background-color: #fff;
            color: black;
            margin-right: 5px;
          }
        }
      }
      &-bottom {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  &-bottom {
    display: flex;
    margin-top: 20px;
    div {
      flex: 1;
      background-color: green;
      height: 30px;
      line-height: 30px;
    }
    &-style {
      margin-right: 20px;
    }
  }
}

.logoNav {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid white;
  margin-top: 10px;
  &-left {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #fff;
    color: black;
  }
  &-center {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    margin: 0 20px 0 10px;
    &-top {
    }
    &-bottom {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: 12px;
      color: #777;
      margin-top: 10px;
    }
  }
}

.comment {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid white;
  margin-top: 10px;
  &-top {
    display: flex;
    flex-direction: column;
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-right {
        font-size: 14px;
      }
    }
    &-bottom {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      div {
        border: 1px solid;
        background-color: #fff;
        color: black;
        padding: 3px 10px;
        margin: 0 10px 10px 0;
      }
    }
  }
  &-bottom {
    display: flex;
    flex-direction: column;
    &-top {
      display: flex;
    }
    &-bottom {
      display: flex;
      flex-direction: column;
      &-item {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        border-bottom: 1px solid #777;
        &-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          &-left {
            display: flex;
            align-items: center;
            &-img {
              width: 25px;
              height: 25px;
              background-color: #fff;
              color: black;
              border-radius: 25px;
              margin-right: 10px;
            }
          }
          &-right {
            display: flex;
            align-items: center;
            .van-icon {
              margin-right: 5px;
            }
          }
        }
        &-center {
          text-align: left;
          margin: 10px 0;
        }
        &-bottom {
          display: flex;
          font-size: 14px;
          color: #777;
        }
      }
    }
  }
}
</style>