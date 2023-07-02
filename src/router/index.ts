import { createRouter, createWebHistory } from 'vue-router'
import { localCache, sessionCache } from '@/utils/cache'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: () => import('../views/main/yqj-main.vue'),
      children: [
        {
          path: '/main/articleManage',
          component: () =>
            import('../views/main/articleManage/article-manage.vue')
        },
        {
          path: '/main/toolManage',
          component: () => import('../views/main/toolManage/tool-manage.vue')
        },
        {
          path: '/main/messageManage',
          component: () =>
            import('../views/main/messageManage/message-manage.vue')
        },
        {
          path: '/main/commentManage',
          component: () =>
            import('../views/main/commentManage/comment-manage.vue')
        },
        {
          path: '/main/friendManage',
          component: () =>
            import('../views/main/friendManage/friend-manage.vue')
        },
        {
          path: '/main/postArticle',
          component: () => import('../views/main/postArticle/post-article.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/login/yqj-login.vue')
    }
  ]
})

router.beforeEach((to) => {
  const token = localCache.getCache('token')
  if (to.path == '/main' && !token) {
    return '/login'
  } else if (to.path == '/main' && token) {
    return sessionCache.getCache('page') ?? '/main/articleManage'
  }
})

export default router
