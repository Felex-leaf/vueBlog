<template>
  <div class="container">
    <div class="banner">
      <div class="typeArea bannerWrap">
        <div class="titleWrap">
          <h1 class="title">
            排行榜上榜动画，基于antd-motion实现。
          </h1>
          <h2 class="dontRDescTitle">
            精美的动画让页面动起来
          </h2>
          <vue-button class="button">
            立即查看
          </vue-button>
        </div>
        <div class="bannerImg" />
        <div class="cardWrap">
          <title-card
            v-for="item in data"
            :key="item.title"
          >
            <template #title>
              <vue-svg
                class-name="icon"
                :icon-class="item.icon"
              />
              <div class="desc">
                {{ item.title }}
              </div>
            </template>
            <template #default>
              <div className="cardIntroduce">
                <div
                  v-for="it in item.children"
                  :key="it"
                >
                  {{ it }}
                </div>
              </div>
            </template>
          </title-card>
        </div>
      </div>
    </div>
    <div class="personal">
      <div class="typeArea">
        <vue-title
          title="个人__/__介绍"
          desc="Personal Introduction"
        />
        <el-row :gutter="40">
          <el-col :span="13">
            <div class="presonalImg" />
          </el-col>
          <el-col :span="11">
            <div class="introduce">
              <h2>Web 前端工程师</h2>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="blog">
      <div class="typeArea">
        <vue-title
          title="博客__/__文章"
          desc="Blog Article"
        />
        <el-row :gutter="40">
          <el-col :span="12">
            <div class="coverWrap">
              <div class="cover" />
              <div>
                <article-card class="articleCard card">
                  <template #title>
                    排行榜上榜动画
                  </template>
                  <template #default>
                    基于react-lottie和antmotion结合实现的排行榜动画效果，点我进行查看！
                  </template>
                  <template #footer>
                    更多
                  </template>
                </article-card>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <article-card
              v-for="item in article"
              :key="item.title"
              class="articleCard"
            >
              <template #title>
                {{ item.title }}
              </template>
              <template #default>
                {{ item.content }}
              </template>
              <template #footer>
                更多
              </template>
            </article-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import VueButton from '@/components/VueButton/index.vue';
import TitleCard from '@/components/TitleCard/index.vue';
import VueTitle from '@/components/VueTitle/index.vue';
import ArticleCard from '@/components/ArticleCard/index.vue';
import Footer from '@/components/Footer/index.vue';

const article = [
  {
    title: '星星动画',
    content: '基于react-lottie的实现的星星动画，点我进行查看！',
  },
  {
    title: '3d展示',
    content: '基于Threejs实现的3d展示效果，点我进行查看！',
  },
  {
    title: 'canvas下雪动画',
    content: '基于原生canvas实现的下雪动画，点我进行查看！',
  },
];

const data = [
  {
    title: '交互动画',
    children: ['熟悉C3动画', '分享动画心得', '动画组件展示'],
    icon: 'animation',
  },
  {
    title: '基础架构',
    children: ['熟悉 React 框架', '熟悉 Vue 框架', '了解 小程序'],
    icon: 'structure',
  },
  {
    title: '装修中',
    icon: 'empty',
  },
  {
    title: '装修中',
    icon: 'empty',
  },
];
</script>

<style scoped lang="less">
.banner {
  width: 100%;
  background-color: @themeBgColor;
  height: 500px;
  margin-bottom: 250px;
  .center();
  .slow();
  justify-content: center;
}
.bannerWrap {
  height: 100%;
  position: relative;
  .center()
}
.cardWrap {
  position: absolute;
  bottom: -150px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cardIntroduce {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #999;
    padding-top: 10px;
    padding-bottom: 20px;
    height: 100%;
    box-sizing: border-box;
    & > div {
        .ellipsis(1);
    };
}
.bannerImg {
  height: 100%;
  width: 60%;
  background: url('../../assets/banner.png') no-repeat center/100%;
}
.titleWrap {
    display: flex;
    flex-direction: column;
    h2 {
        color: #eee;
        font-weight: normal;
        font-size: 30px;
    }
}
.title {
  height: auto;
  font-weight: 700;
  color: #eee;
}
.dontRTitle {
  font-size: 38px;
}
.dontRDescTitle {
  font-size: 30px !important;
}
.desc {
  margin-top: 10px;
}
.button {
  width: 80px;
}
.icon {
  font-size: 50px;
}
.personal {
  margin-bottom: 100px;
}
.presonalImg {
  height: 300px;
  background: @themeBgColorH url('../../assets/selfbg.png') center/contain no-repeat;
  .slow()
}
.introduce {
  flex: 1;
  height: 100%;
  padding: 30px 0px 30px 100px;
  box-sizing: border-box;
  h2 {
    font-size: 32px;
    color: @themeColor;
  }
}
.articleCard:not(:last-child) {
  margin-bottom: 10px;
}
.coverWrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: @themeBgColorW;
  .slow(.3s, all);
  &:hover {
    box-shadow: 0px 5px 10px 10px #624be014;
  };
}
.cover {
  flex: 1;
  background: url('../../assets/cover.jpg') center/cover no-repeat;
}
.card {
  border-radius: 0 0 5px 5px;
}
</style>
