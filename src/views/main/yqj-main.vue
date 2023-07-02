<template>
  <div class="main">
    <el-container>
      <el-aside width="130px">
        <tabBar></tabBar>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <mainHeader></mainHeader>
        </el-header>
        <el-main>
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import tabBar from '@/components/tab-bar.vue'
import mainHeader from '@/components/main-header.vue'
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
  .el-container {
    height: 100%;
    .el-header {
      padding: 0;
    }
  }
}
</style>
