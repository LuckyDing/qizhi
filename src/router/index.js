import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Menus from '@/views/Menus'
import Users from '@/views/Users'
// 用户管理
import UIndex from '@/views/Users/Index'
import AddUser from '@/views/Users/AddUser'
import UserInfo from '@/views/Users/UserInfo'
// 设备管理
import Equipment from '@/views/Equipment'
// 食物管理
import Foods from '@/views/Foods'
import FIndex from '@/views/foods/Index'
import FoodInfo from '@/views/foods/FoodInfo.vue'
// 反馈
import Feedback from '@/views/Feedback'
import FDIndex from '@/views/feedback/Index'
import FeedbackInfo from '@/views/feedback/FeedbackInfo'
// 推送管理
import Message from '@/views/Message'
import MIndex from '@/views/message/Index'
import MessageEdit from '@/views/message/MessageEdit'
import MessageInfo from '@/views/message/MessageInfo'
// 操作指南
import Article from '@/views/Article'
import AIndex from '@/views/article/AIndex'
import ArticleEdit from '@/views/article/ArticleEdit'

// 帐号管理
import Account from '@/views/Account'
import UEditor from '@/components/Ueditor'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld/:state/:public/:upload/:images/:date/:img',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'UEditor',
      name: 'UEditor',
      component: UEditor
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Menus',
      name: 'Menus',
      component: Menus,
      children: [
        {
          path: 'Users',
          name: 'Users',
          component: Users,
          children: [
            {
              path: 'UIndex',
              name: 'UIndex',
              component: UIndex
            },
            {
              path: 'AddUser',
              name: 'AddUser',
              component: AddUser
            },
            {
              path: 'UserInfo/:id',
              name: 'UserInfo',
              component: UserInfo
            }
          ]
        },
        {
          path: 'Equipment',
          name: 'Equipment',
          component: Equipment
        },
        {
          path: 'Foods',
          name: 'Foods',
          component: Foods,
          children: [
            {
              path: 'FIndex',
              name: 'FIndex',
              component: FIndex
            },
            {
              path: 'FoodInfo/:id',
              name: 'FoodInfo',
              component: FoodInfo
            }
          ]
        },
        {
          path: 'Feedback',
          name: 'Feedback',
          component: Feedback,
          children: [
            {
              path: 'FDIndex',
              name: 'FDIndex',
              component: FDIndex
            },
            {
              path: 'FeedbackInfo/:id',
              name: 'FeedbackInfo',
              component: FeedbackInfo
            }
          ]
        },
        {
          path: 'Message',
          name: 'Message',
          component: Message,
          children: [
            {
              path: 'MIndex',
              name: 'MIndex',
              component: MIndex
            },
            {
              path: 'MessageEdit',
              name: 'MessageEdit',
              component: MessageEdit
            },
            {
              path: 'MessageInfo/:id',
              name: 'MessageInfo',
              component: MessageInfo
            }
          ]
        },
        {
          path: 'Article',
          name: 'Article',
          component: Article,
          children: [
            {
              path: 'AIndex',
              name: 'AIndex',
              component: AIndex
            },
            {
              path: 'ArticleEdit/:type/:aid',
              name: 'ArticleEdit',
              component: ArticleEdit
            }
          ]
        },
        {
          path: 'Account',
          name: 'Account',
          component: Account
        }
      ]
    }
  ]
})
export default router
