import {
  storeBindingsBehavior
} from "mobx-miniprogram-bindings";
import {
  store
} from "../store/store";
Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: "sum",
      active: 'activeTabBarIndex',
    },
    actions: {
      updateActive: 'updateActiveTabBarIndex'
    },
  },
  observers: {
    'sum': function (val) {
      this.setData({
        'list[1].info': val,
      })
    }
  },
  options: {
    styleIsolation: 'shared',
  },
  properties: {

  },
  data: {
    list: [{
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/image/tabs/home.png",
        "selectedIconPath": "/image/tabs/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/image/tabs/message.png",
        "selectedIconPath": "/image/tabs/message-active.png",
        "info": 2
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/image/tabs/contact.png",
        "selectedIconPath": "/image/tabs/contact-active.png"
      }
    ]
  },
  methods: {
    onChange(e) {
      // this.setData({
      //   active: e.detail
      // });
      this.updateActive(e.detail)
      wx.switchTab({
        url: this.data.list[e.detail].pagePath,
      })
    }
  }
})