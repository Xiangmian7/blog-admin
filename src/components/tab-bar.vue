<template>
  <div class="tabbox">
    <template v-for="item in tabList" :key="item.path">
      <div
        class="item"
        :class="item.path == pathVal ? 'active-item' : ''"
        @click="tabClickHandler(item.path)"
      >
        {{ item.name }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { sessionCache } from '@/utils/cache'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const tabList = [
  {
    name: '文章管理',
    path: '/main/articleManage'
  },
  {
    name: '工具管理',
    path: '/main/toolManage'
  },
  {
    name: '留言管理',
    path: '/main/messageManage'
  },
  {
    name: '评论管理',
    path: '/main/commentManage'
  },
  {
    name: '友链管理',
    path: '/main/friendManage'
  }
]
const router = useRouter()
const pathVal = ref(sessionCache.getCache('page') ?? '/main/articleManage')

function tabClickHandler(path: string) {
  pathVal.value = path
  sessionCache.setCache('page', path)
  router.push(path)
}
</script>

<style lang="less" scoped>
.tabbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgb(235, 231, 231);
  .item {
    padding: 17px 0 17px 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: #409eff;
      background-color: rgba(228, 217, 217, 0.2);
    }
  }
}
.active-item {
  color: #409eff;
}
</style>
