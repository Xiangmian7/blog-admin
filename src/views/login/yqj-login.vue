<template>
  <div class="login">
    <el-card>
      <div class="title">yqj博客管理系统</div>
      <el-form :model="formValue" :rules="rules" ref="formEl">
        <el-form-item prop="name">
          <el-input
            placeholder="账号"
            v-model="formValue.name"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="password">
          <el-input
            placeholder="密码"
            v-model="formValue.password"
            type="password"
            show-password
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item class="feature">
          <el-checkbox
            v-model="isRemmberPassword"
            label="记住密码"
          ></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="isLoadind"
            type="primary"
            round
            style="width: 100%"
            @click="loginClickHandler"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/stores/login'
import { localCache } from '@/utils/cache'

const loginStore = useLoginStore()
const formValue = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
const formEl = ref()
const isRemmberPassword = ref(false)
const isLoadind = ref(false)
const rules = reactive({
  name: [
    { required: true, message: '请输入您的账号', trigger: 'change' },
    { min: 5, max: 18, message: '账号长度必须在5到18之间', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请输入您的密码',
      trigger: 'change'
    },
    { min: 5, max: 18, message: '密码长度必须在5到18之间', trigger: 'blur' }
  ]
})
onMounted(() => {
  if (localCache.getCache('name')) {
    isRemmberPassword.value = true
  } else {
    isRemmberPassword.value = false
  }
})
function loginClickHandler() {
  formEl.value?.validate((isValid: boolean) => {
    isLoadind.value = true
    if (isValid) {
      const name = formValue.name
      const password = formValue.password
      loginStore.loginPostAction(name, password).then(
        () => {
          if (isRemmberPassword.value) {
            localCache.setCache('name', formValue.name)
            localCache.setCache('password', formValue.password)
          } else {
            localCache.removeCache('name')
            localCache.removeCache('password')
          }
        },
        () => {
          isLoadind.value = false
          ElMessage.error('账号或密码错误，请重新输入~')
        }
      )
    } else {
      isLoadind.value = false
      ElMessage.error('格式错误，请重新输入~')
    }
  })
}
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .el-card {
    margin-bottom: 50px;
    padding: 10px;
    border-radius: 7%;
    width: 320px;
    :deep(.el-card__body) {
      padding-bottom: 9px;
    }
    .title {
      padding-bottom: 20px;
      font-weight: 800;
      text-align: center;
    }
    .feature {
      margin-bottom: 10px;
    }
    .password {
      margin-bottom: 6px;
    }
  }
}
</style>
