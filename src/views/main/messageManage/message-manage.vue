<template>
  <div class="message-manage">
    <el-table :data="messageList" style="width: 100%" border row-key="id" lazy>
      <el-table-column prop="name" label="名称" />
      <el-table-column label="头像" :width="70">
        <template #default="scope">
          <el-avatar :src="scope.row.avatar" @error="true">
            <img
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
            />
          </el-avatar>
        </template>
      </el-table-column>
      <el-table-column label="内容">
        <template #default="scope">
          <template v-if="scope.row.content.split('/')[1]">
            <span class="reply">{{
              scope.row.content.split('/')[1] + ' '
            }}</span>
          </template>
          <span>{{ scope.row.content.split('/')[0] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" :width="170">
        <template #default="scope">{{
          formatUTC(scope.row['createAt'])
        }}</template>
      </el-table-column>
      <el-table-column label="创建时间" :width="170">
        <template #default="scope">{{
          formatUTC(scope.row['updateAt'])
        }}</template>
      </el-table-column>
      <el-table-column label="操作" :width="80">
        <template #default="scope">
          <el-button
            size="small"
            type="danger"
            text
            @click="deleteClickHandler(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        :page-size="10"
        background
        layout="total, prev, pager, next"
        :total="totalCount"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import formatUTC from '@/utils/format'
import useMessageStore from '@/stores/main/message'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const messageStore = useMessageStore()
const offset = ref(0)
messageStore.getMessageListAction(offset.value, 10)
const { messageList, totalCount } = storeToRefs(messageStore)

function deleteClickHandler(id: number) {
  messageStore.deleteMessageAction(id).then(
    () => {
      messageStore.getMessageListAction(offset.value, 10)
      ElMessage({
        message: '删除成功~',
        type: 'success'
      })
    },
    () => {
      ElMessage.error('删除失败~')
    }
  )
}

function handleCurrentChange(val: number) {
  offset.value = (val - 1) * 10
  messageStore.getMessageListAction(offset.value, 10)
}
</script>

<style lang="less" scoped>
.pagination {
  padding-top: 20px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
}
.reply {
  color: #409eff;
}
</style>
