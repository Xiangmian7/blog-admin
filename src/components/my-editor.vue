<template>
  <v-md-editor
    v-model="text"
    height="600px"
    placeholder="请输入..."
    @upload-image="handleUploadImage"
    :disabled-menus="[]"
  ></v-md-editor>
  <div class="btn">
    <el-button type="primary" size="large" round @click="updateContentFn"
      >上传内容</el-button
    >
  </div>
</template>

<script setup lang="ts">
import useArticleStore from '@/stores/main/article'
import server from '@/services/request'
import { localCache } from '@/utils/cache'
import { ref, watchEffect } from 'vue'
import { ElMessage } from 'element-plus'
import { storeToRefs } from 'pinia'
const articleStore = useArticleStore()
const { articleContent } = storeToRefs(articleStore)
const props = defineProps(['articleId'])
const text = ref('')
watchEffect(() => {
  text.value = articleContent.value
  setTimeout(() => {
    stop()
  }, 5000)
})
const token = 'Bearer ' + localCache.getCache('token')
const handleUploadImage = (event: any, insertImage: any, files: any) => {
  const formData = new FormData()
  formData.append('picture', files[0])
  server
    .post(`/upload/picture/${props.articleId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: token
      }
    })
    .then(
      (res) => {
        insertImage({
          url: res
        })
        ElMessage({
          message: '图片上传成功~',
          type: 'success'
        })
      },
      () => {
        ElMessage.error('图片上传失败~')
      }
    )
}

function updateContentFn() {
  if (text.value) {
    server
      .request({
        method: 'POST',
        url: `/article/${props.articleId}`,
        data: { content: text.value },
        headers: {
          authorization: token
        }
      })
      .then(
        () => {
          ElMessage({
            message: '内容上传成功~',
            type: 'success'
          })
          text.value = ''
          articleStore.articleName = ''
          articleStore.articleId = 0
          articleStore.articleContent = ''
        },
        () => {
          ElMessage.error('内容上传失败~')
        }
      )
  } else {
    ElMessage.error('数据不能为空~')
  }
}
</script>

<style lang="less" scoped>
.btn {
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
