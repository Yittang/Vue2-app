<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header'
import {urlParse} from './common/js/util.js'

const response = require('./common/data/seller.json');
const ERR_OK = 0

export default {
    name: 'App',
    data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
      }
    },
    created() {
      // this.$axios.get('/api/seller')
      // .then(response => {
      //   response = response.data
      //   if(response.errno == ERR_OK) {
      //     this.seller = response.data
      //   }
      // })
      // .catch(error => {
      //   console.log(error)
      // })
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data)
      }
    },
    components: {
      'v-header': header,
    },
  }
</script>

<style lang="less">
#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .tab-item {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: rgb(77, 85, 93);
      .active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
