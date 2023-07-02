<template>
  <div class="tool-manage">
    <el-form
      label-position="right"
      label-width="100px"
      style="max-width: 600px"
      :model="addToolData"
      ref="addFormRef"
    >
      <el-form-item label="工具名" prop="name">
        <el-input v-model="addToolData.name" size="large"></el-input>
      </el-form-item>
      <el-form-item label="工具链接" prop="url">
        <el-input v-model="addToolData.url" size="large"></el-input>
      </el-form-item>
      <el-form-item class="addTool">
        <el-button type="primary" @click="addToolClickHandler">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="toolList" style="width: 100%" border>
      <el-table-column prop="id" label="id" :width="70" />
      <el-table-column prop="name" label="名称" />
      <el-table-column label="链接">
        <template #default="scope">
          <el-link type="primary" :underline="false" :href="scope.row.url">{{
            scope.row.url
          }}</el-link>
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
      <el-table-column label="操作" :width="130">
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            text
            @click="editClickHandler(scope.row)"
            >编辑</el-button
          >
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
    <el-dialog
      v-model="dialogVisible"
      align-center
      center
      title="修改工具信息"
      width="30%"
    >
      <el-form size="large" :model="editFormVal" label-width="70">
        <el-form-item label="工具名">
          <el-input v-model="editFormVal.name"></el-input>
        </el-form-item>
        <el-form-item label="工具链接">
          <el-input v-model="editFormVal.url"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmClickHandler">
          确定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import formatUTC from '@/utils/format'
import useToolStore from '@/stores/main/tool'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
const toolStore = useToolStore()
const addFormRef = ref()
const offset = ref(0)
const editId = ref()
const dialogVisible = ref(false)
const addToolData = reactive({
  name: '',
  url: ''
})
const editFormVal: any = reactive({
  name: '',
  url: ''
})
toolStore.getToolListAction(offset.value, 10)
const { toolList, totalCount } = storeToRefs(toolStore)
function addToolClickHandler() {
  if (addToolData.name && addToolData.url) {
    const toolInfo = { name: addToolData.name, url: addToolData.url }
    toolStore.addToolAction(toolInfo).then(
      () => {
        addFormRef.value.resetFields()
        toolStore.getToolListAction(offset.value, 10)
        ElMessage({
          message: '添加工具成功~',
          type: 'success'
        })
      },
      () => {
        ElMessage.error('添加工具失败~')
      }
    )
  } else {
    ElMessage.error('数据不能为空~')
  }
}
function deleteClickHandler(id: number) {
  toolStore.deleteToolAction(id).then(
    () => {
      toolStore.getToolListAction(offset.value, 10)
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
function editClickHandler(itemData: any) {
  dialogVisible.value = true
  editId.value = itemData.id
  for (const key in editFormVal) {
    editFormVal[key] = itemData[key]
  }
}
function handleCurrentChange(val: number) {
  offset.value = (val - 1) * 10
  toolStore.getToolListAction(offset.value, 10)
}
function confirmClickHandler() {
  if (editFormVal.name && editFormVal.url) {
    const updateInfo = { name: editFormVal.name, url: editFormVal.url }
    const id = editId.value
    toolStore.updateToolAction(updateInfo, id).then(
      () => {
        toolStore.getToolListAction(offset.value, 10)
        dialogVisible.value = false
        ElMessage({
          message: '更新成功~',
          type: 'success'
        })
      },
      () => {
        ElMessage.error('更新失败~')
      }
    )
  } else {
    ElMessage.error('数据不能为空~')
  }
}
</script>

<style lang="less" scoped>
.el-form {
  .addTool {
    :deep(.el-form-item__content) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.pagination {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}
</style>
