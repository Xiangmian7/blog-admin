<template>
  <div class="articleManage">
    <div class="new-article">
      <el-button type="primary" @click="dialogClick">新建文章</el-button>
    </div>
    <el-table :data="articleList" style="width: 100%" border>
      <el-table-column prop="id" label="id" :width="60" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="classify" label="分类" :width="70" />
      <el-table-column label="标签" :width="140">
        <template #default="scope">
          <template v-for="label in scope.row.labels" :key="label.id">
            <el-tag>{{ label.name }}</el-tag>
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述" />
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
            @click="dialogClick(scope.row)"
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
      title="修改文章基本信息"
      width="42%"
    >
      <el-form size="large" :model="formValue">
        <el-form-item label="标题">
          <el-input v-model="formValue.title" placeholder="标题..."></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-input
            v-model="formValue.classify"
            placeholder="开发 随笔"
          ></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-input
            v-model="formValue.labels"
            placeholder="请将要添加的标签以/隔开"
          ></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="描述..."
            v-model="formValue.description"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmClickHandler">
          确定
        </el-button>
        <el-button type="success" @click="updateContentClick">
          修改内容
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import formatUTC from '@/utils/format'
import useArticleStore from '@/stores/main/article'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { sessionCache } from '@/utils/cache'

const router = useRouter()
const dialogVisible = ref(false)
const offset = ref(0)
const articleStore = useArticleStore()
const formValue: any = reactive({
  title: '',
  classify: '',
  labels: '',
  description: ''
})
const editId = ref()
articleStore.getArticleListAction(offset.value, 10)

const { articleList, totalCount } = storeToRefs(articleStore)

function deleteClickHandler(id: number) {
  articleStore.deleteArticleAction(id).then(
    () => {
      articleStore.getArticleListAction(offset.value, 10)
      ElMessage({
        message: '删除文章成功~',
        type: 'success'
      })
    },
    () => {
      ElMessage.error('删除文章失败~')
    }
  )
}

function handleCurrentChange(val: number) {
  offset.value = (val - 1) * 10
  articleStore.getArticleListAction(offset.value, 10)
}

function dialogClick(itemData?: any) {
  if (!itemData) {
    for (const key in formValue) {
      formValue[key] = ''
    }
  } else {
    dialogVisible.value = true
    for (const key in formValue) {
      formValue[key] = itemData[key]
    }
    let labelVal = ''
    for (let label of itemData.labels) {
      labelVal = labelVal + '/' + label.name
    }
    labelVal = labelVal.slice(1)
    formValue.labels = labelVal
    editId.value = itemData.id
  }
}
function confirmClickHandler() {
  if (
    formValue.title &&
    formValue.classify &&
    formValue.labels &&
    formValue.description
  ) {
    const labels = formValue.labels.split('/')
    const id = editId.value
    const updateInfo = {
      title: formValue.title,
      classify: formValue.classify,
      description: formValue.description,
      labels: labels
    }
    articleStore.updateArticleBaseInfoAction(updateInfo, id).then(
      () => {
        ElMessage({
          message: '更新数据成功~',
          type: 'success'
        })
        dialogVisible.value = false
        articleStore.getArticleListAction(offset.value, 10)
      },
      () => {
        ElMessage.error('更新数据失败~')
      }
    )
  } else {
    ElMessage.error('数据不能为空~')
  }
}
function updateContentClick() {
  const id = editId.value
  articleStore.getArticleDetailAction(id).then(() => {
    sessionCache.setCache('page', '/main/postArticle')
    sessionCache.setCache('activeIndex', '1')
    router.push('/main/postArticle')
  })
}
</script>

<style lang="less" scoped>
.new-article {
  margin-bottom: 15px;
}
.pagination {
  padding-top: 20px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>
