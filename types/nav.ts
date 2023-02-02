/**
 * 顶部导航栏标签
 *
 * title： 顶部标签标题
 * link 链接
 */
export interface HeaderBar {
  title?: string
  link?: string
}

/**
 * 子标签
 *
 * title：每个子标签的标题
 */
export interface TagItem {
  title: string
}

/**
 * 标签组
 *
 * tagitems：子标签
 * link：标签的根链接
 */
export interface Tag {
  tagitems: TagItem[]
  link: string
}
