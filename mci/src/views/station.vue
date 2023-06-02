<template>
  <div class="wh100">
    <case_info />
    <el-row class="pl-5">
      <el-col :span="19">
        <el-row class="float-right w-96">
          <el-col :span="12">日期區間：</el-col>
          <el-col :span="12">縣市：</el-col>
        </el-row>

        <el-row class="w-[100%]">
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
                <router-link v-if="row.case_state === '進行中'" :to="{ name: 'patient' }">
                  <el-button type="primary" size="mini">進行中</el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-col>

      <el-col :span="5">
        <div class="text-center">傷患後送數據</div>
        <el-space direction="vertical" class="w-[100%]">
          <el-card v-for="i in 4" :key="i" class="box-card">
            <template #header>
              <div class="card-header">
                <span>後送中人數</span>
              </div>
            </template>
            <div>
              {{ 'List item ' }}
            </div>
          </el-card>
        </el-space>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Case_info from '../components/case_info.vue'

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
.el-space__item {
  width: 80%;
}
</style>
