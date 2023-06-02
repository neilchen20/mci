<!--Vue.js 3 | Element plus | Windi CSS | Mockjs-->
<template>
  <el-container>
    <el-header>
      <img class="float-left w-60" :src="logo" alt="Image" @click="reloadPage" title="回首頁" />
      <el-row class="float-right mt-3">
        <span>最後更新：0602</span>
        <el-button type="primary" plain>APP下載</el-button>
        <el-button type="primary" plain>案件列表</el-button>
        <el-button type="primary" plain @click="goTonlc">回到個人網站</el-button>
      </el-row>
    </el-header>
  </el-container>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
const router = useRouter()
const route = useRoute()
const logo = ref('src/assets/logo.png')

const reloadPage = () => {
  router.push('/')
  setTimeout(() => {
    window.location.reload()
  }, 0)
}
const goTonlc = () => {
  window.location.reload() //之後個人網頁上線後改href('xx')
}
</script>

<style>
@import './assets/font/font.css';
div {
  font-family: jf_font;
}

.el-container {
  position: sticky;
  top: 0;
  width: 100vw;
  height: auto;
  z-index: 2;
  background-color: #d2ecfa00;
  background-image: url(src/assets/bg_head.png);
  background-repeat: repeat-x;
}
</style>
