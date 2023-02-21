import { onMounted, onUnmounted } from 'vue'

export default () => {

  const hideTop = () => {
    const top: HTMLElement | null = document.querySelector('.header')
    if (!top) return

    top.style.transform = window.pageYOffset > 300 ? 'translate3d(0,-100%,0)' : 'none'

    const viewNavEle: HTMLElement | null = document.querySelector('.view-nav')
    if (viewNavEle) {
      viewNavEle.style.top = window.pageYOffset > 300 ? '0px' : '60px'
    }


  }

  // 导航栏收缩
  onMounted(() => {
    window.addEventListener('scroll', hideTop)
    console.log('加载页面滚动事件')
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', hideTop)
    console.log('卸载页面滚动事件')
  })

}
