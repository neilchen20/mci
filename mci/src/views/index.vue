<template>
  <el-main>
    <el-row class="float-right w-96">
      <el-col :span="12">日期區間：</el-col>
      <el-col :span="12">縣市：</el-col>
    </el-row>

    <!-- test -->
    <el-table
      :data="tableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column prop="date" label="Date" sortable width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" :formatter="formatter" />
      <el-table-column prop="case_state" label="案件狀態">
        <template #default="{ row }">
          <router-link v-if="row.case_state === '進行中'" :to="{ name: 'station' }">
            <el-button type="primary" size="mini">進行中</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- test -->
  </el-main>

  <el-footer>
    <img class="fixed h-50 bottom-0" :src="patient" />
  </el-footer>
  <router-view />
</template>

<script setup>
import { ref } from 'vue'
const patient = ref('src/assets/patient.png')

//test
const formatter = (row, column) => {
  return row.address
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    case_state: '進行中'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<style>
.el-main {
  height: 100%;
}

.el-footer {
  position: fixed;
  bottom: 0;
  height: 12vh;
  width: 100vw;
}
</style>
