// components/test/test.js
// 1. 使用 require() 导入需要的自定义 behavior 模块
const myBehavior = require('../../behaviors/myBehavior')
Component({
  // 2. 将导入的 behavior 实例对象,挂载到 behaviors数组节点中,即可生效
  behaviors: [myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {},
  /**
   * 组件的初始数据
   */
  data: {},
  observers: { // 数据监听节点
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      console.log(
        this.data.username
      )
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
    },
    hide: function () {
      // 页面被隐藏
    },
    resize: function (size) {
      // 页面尺寸变化
    }
  }
})