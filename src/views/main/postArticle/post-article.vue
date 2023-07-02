<template>
  <div class="postArticle">
    <el-form :model="formVal" size="large" ref="fromel">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formVal.title" placeholder="标题..." />
      </el-form-item>
      <el-form-item label="文章描述" prop="description">
        <el-input
          type="textarea"
          :rows="5"
          v-model="formVal.description"
          placeholder="描述..."
        />
      </el-form-item>
      <el-form-item label="文章分类" prop="classify">
        <el-input v-model="formVal.classify" placeholder="开发 随笔" />
      </el-form-item>
      <el-form-item label="文章标签" prop="label">
        <el-input
          v-model="formVal.label"
          placeholder="请将要添加的标签以/隔开"
        />
      </el-form-item>
      <el-form-item class="button">
        <el-button
          type="primary"
          size="large"
          round
          @click="commitArticleHandler"
          >提交</el-button
        >
        <span class="buttonInfo">(必须先提交文章基本信息获取文章id)</span>
      </el-form-item>
    </el-form>
    <template v-if="articleName ? true : false">
      <div class="articleName">
        <span>当前正在编辑的文章：{{ articleName }}</span>
      </div>
    </template>
    <myEditor :articleId="articleId"></myEditor>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useArticleStore from '@/stores/main/article'
import myEditor from '@/components/my-editor.vue'
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'

const articleStore = useArticleStore()
const fromel = ref()

const formVal = reactive({
  title: '',
  description: '',
  classify: '',
  label: ''
})
function commitArticleHandler() {
  if (
    formVal.title &&
    formVal.description &&
    formVal.classify &&
    formVal.label
  ) {
    const labels = formVal.label.split('/')
    const articleInfo = {
      title: formVal.title,
      description: formVal.description,
      classify: formVal.classify,
      labels
    }
    articleStore.postArticleBaseInfoAction(articleInfo).then(
      () => {
        fromel.value.resetFields()
        ElMessage({
          message: '提交成功~',
          type: 'success'
        })
      },
      () => {
        ElMessage.error('提交失败~')
      }
    )
  } else {
    ElMessage.error('文章基本信息不能为空~')
  }
}
const { articleId, articleName } = storeToRefs(articleStore)
</script>

<style lang="less" scoped>
.postArticle {
  .el-form {
    padding: 25px;
    .button {
      .el-button {
        width: 120px;
      }
      :deep(.el-form-item__content) {
        display: flex;
        flex-direction: column;
        .buttonInfo {
          font-size: 12px;
          color: #a8abb2;
        }
      }
    }
  }
  .articleName {
    display: flex;
    span {
      color: #a8abb2;
      padding: 5px;
      cursor: pointer;
      &:hover {
        background-color: #409eff;
        color: #fff;
      }
    }
  }
}
</style>
