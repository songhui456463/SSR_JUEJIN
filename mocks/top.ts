import { HeaderBar, Tag } from '@/types/nav'

// 顶部导航标签
export const headers: HeaderBar[] = [
  {
    title: '首页',
    link: '/'
  },
  {
    title: '沸点',
    link: '/demo1'
  },
  {
    title: '课程',
    link: '/demo1'
  },
  {
    title: '直播',
    link: '/demo1'
  },
  {
    title: '活动',
    link: '/demo1'
  },
  {
    title: '竞赛',
    link: '/demo1'
  },
  {
    title: '商城',
    link: '/demo1'
  }
]

// 标签数据
export const tags: Tag[] = [
  {
    tagitems: [
      {
        title: '后端'
      },
      {
        title: '掘金日新计划'
      },
      {
        title: 'Java'
      },
      {
        title: 'Go'
      },
      {
        title: '掘金金石计划'
      },
      {
        title: '架构'
      }
    ],
    link: 'backend'
  },
  {
    tagitems: [
      {
        title: '前端'
      },
      {
        title: 'Java'
      },
      {
        title: '掘金日新计划'
      },

      {
        title: 'Go'
      },
      {
        title: '掘金金石计划'
      },
      {
        title: '架构'
      }
    ],
    link: 'front'
  }
]
