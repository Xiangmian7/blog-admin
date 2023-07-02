import { loginPost } from '@/services/login'
import { defineStore } from 'pinia'
import router from '@/router'
import { localCache } from '@/utils/cache'

interface stateInterface {
  token: string
}

const useLoginStore = defineStore('login', {
  state(): stateInterface {
    return {
      token: localCache.getCache('token') ?? ''
    }
  },
  actions: {
    async loginPostAction(name: string, password: string) {
      const loginResult: any = await loginPost(name, password)
      const { token } = loginResult
      this.token = token
      localCache.setCache('token', token)
      router.push('/main')
    }
  }
})

export default useLoginStore
