import {
  deleteArticle,
  getArticleDetail,
  getArticleList,
  postArticleBaseInfo,
  updateArticleBaseInfo
} from '@/services/main'
import { defineStore } from 'pinia'
interface stateInterface {
  articleId: number
  articleName: string
  articleList: any
  totalCount: number
  articleContent: string
}

const useArticleStore = defineStore('article', {
  state(): stateInterface {
    return {
      articleId: 0,
      articleName: '',
      articleList: [],
      totalCount: 0,
      articleContent: ''
    }
  },
  actions: {
    async postArticleBaseInfoAction(articleInfo: any) {
      const result: any = await postArticleBaseInfo(articleInfo)
      this.articleId = result.insertId
      this.articleName = result.articleName
      this.articleContent = ''
    },
    async getArticleListAction(offset: number, size: number) {
      const listResult: any = await getArticleList(offset, size)
      this.articleList = listResult
      this.totalCount = listResult[0].total
    },
    async deleteArticleAction(id: number) {
      await deleteArticle(id)
    },
    async updateArticleBaseInfoAction(updateInfo: any, id: number) {
      await updateArticleBaseInfo(updateInfo, id)
    },
    async getArticleDetailAction(id: number) {
      const result: any = await getArticleDetail(id)
      this.articleId = id
      this.articleName = result.title
      this.articleContent = result.content
    }
  }
})

export default useArticleStore
