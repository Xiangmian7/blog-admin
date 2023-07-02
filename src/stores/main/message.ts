import { deleteMessage, getMessageList } from '@/services/main'
import { defineStore } from 'pinia'

interface stateInterface {
  messageList: any
  totalCount: number
}

const useMessageStore = defineStore('message', {
  state(): stateInterface {
    return {
      messageList: [],
      totalCount: 0
    }
  },
  actions: {
    async getMessageListAction(offset: number, size: number) {
      const result: any = await getMessageList(offset, size)
      this.messageList = result
      this.totalCount = result[0].total
    },
    async deleteMessageAction(id: number) {
      await deleteMessage(id)
    }
  }
})

export default useMessageStore
