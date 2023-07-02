import server from '../request'
import { localCache } from '@/utils/cache'

export function postArticleBaseInfo(articleInfo: any) {
  return server.request({
    method: 'POST',
    url: '/article',
    data: articleInfo,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache('token')
    }
  })
}

export function getArticleList(offset: number, size: number) {
  return server.request({
    method: 'GET',
    url: `/article?offset=${offset}&size=${size}`
  })
}

export function deleteArticle(id: number) {
  return server.request({
    method: 'DELETE',
    url: `/article/${id}`,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache('token')
    }
  })
}

export function updateArticleBaseInfo(updateInfo: any, id: number) {
  return server.request({
    method: 'PATCH',
    url: `/article/${id}`,
    data: updateInfo,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache('token')
    }
  })
}

export function getToolList(offset: number, size: number) {
  return server.request({
    method: 'GET',
    url: `/tool?offset=${offset}&size=${size}`
  })
}

export function addTool(toolInfo: any) {
  return server.request({
    method: 'POST',
    url: `/tool`,
    data: toolInfo,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache('token')
    }
  })
}

export function deleteTool(id: number) {
  return server.request({
    method: 'DELETE',
    url: `/tool/${id}`,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache('token')
    }
  })
}
export function updateTool(updateInfo: any, id: number) {
  return server.request({
    method: 'PATCH',
    url: `/tool/${id}`,
    data: updateInfo,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache('token')
    }
  })
}

export function getMessageList(offset: number, size: number) {
  return server.request({
    method: 'GET',
    url: `/message?offset=${offset}&size=${size}`
  })
}

export function deleteMessage(id: number) {
  return server.request({
    method: 'DELETE',
    url: `/message/${id}`,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache('token')
    }
  })
}

export function getArticleDetail(id: number) {
  return server.request({
    method: 'GET',
    url: `/article/${id}`
  })
}
