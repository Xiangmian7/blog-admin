<template>
  <div class="header">
    <div class="welcome">Welcome to yqj Blog Management System~~</div>
    <div class="exit" @click="exitClickHandler">退出登录</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { localCache, sessionCache } from '@/utils/cache'
const router = useRouter()
function exitClickHandler() {
  localCache.removeCache('token')
  sessionCache.removeCache('page')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.header {
  border-bottom: 1px solid #eaeaea;
  height: 100%;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .welcome {
    font-size: 18px;
    color: #409eff;
  }
  .exit {
    cursor: pointer;
    color: #818286;
    font-size: 15px;
    &:hover {
      color: #409eff;
    }
  }
}
</style>
