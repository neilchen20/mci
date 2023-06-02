<template>
  <div>
    <case_info />
    <button @click="showPage1">顯示子頁面1</button>
    <br />
    <button @click="showPage2">顯示子頁面2</button>
    <br />
    <div v-if="currentPage === 'page1'">
      <Page1 />
    </div>
    <div v-if="currentPage === 'page2'">
      <Page2 />
    </div>
  </div>
</template>

<script setup>
import case_info from '../components/case_info.vue'
import { ref } from 'vue'

const currentPage = ref('page1')

const showPage1 = () => {
  currentPage.value = 'page1'
}

const showPage2 = () => {
  currentPage.value = 'page2'
}
</script>

<style scoped></style>
