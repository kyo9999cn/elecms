import { createRouter, createWebHashHistory } from 'vue-router'

interface ModuleType {
  default: []
}
const modules = import.meta.glob<ModuleType>('./modules/*.ts', {
  eager: true
})

export const asyncRoutes = []

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  asyncRoutes.push(...modList)
})

export const getAsyncRoute = (routes: any[], path: string) => {
  let route: any = {}
  routes.forEach((vo) => {
    if (vo.path === path) {
      route = vo
    }
    if (vo.children) {
      route = getAsyncRoute(vo.children, path)
    }
  })
  return route
}

export const getRoute = (path: string) => {
  return getAsyncRoute(asyncRoutes, path)
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Index',
      path: '/',
      redirect: '/dashboard'
    },
    ...asyncRoutes
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
})

export default router
