import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings';
import {
  store
} from '../../store/store'
Component({
  behaviors: [storeBindingsBehavior], // 通过 storeBindingsBehavior 来实现自动绑定
  storeBindings: {
    store, // 指定要绑定的store，
    // 指定要绑定的字段数据
    fields: {
      numA: () => store.numA, // 绑定数据的第一种方式
      numB: (store) => store.numB, // 绑定数据的第二种方式
      sum: 'sum', // 绑定数据的第三种方式
    },
    // 指定要绑定的方法
    actions: {
      updateNum2: 'updateNum2',
      updateNum1: 'updateNum1'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnHandle(e) {
      this.updateNum1(e.target.dataset.step);
    },
  }
})