import { addTool, deleteTool, getToolList, updateTool } from '@/services/main'
import { defineStore } from 'pinia'

interface stateInterface {
  toolList: any
  totalCount: number
}

const useToolStore = defineStore('tool', {
  state(): stateInterface {
    return {
      toolList: [],
      totalCount: 0
    }
  },
  actions: {
    async getToolListAction(offset: number, size: number) {
      const result: any = await getToolList(offset, size)
      this.toolList = result
      this.totalCount = result[0].total
    },
    async addToolAction(toolInfo: any) {
      await addTool(toolInfo)
    },
    async deleteToolAction(id: number) {
      await deleteTool(id)
    },
    async updateToolAction(updateInfo: any, id: number) {
      await updateTool(updateInfo, id)
    }
  }
})

export default useToolStore
