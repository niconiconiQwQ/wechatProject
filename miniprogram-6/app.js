// 在小程序入口文件中(app.js), 只需调用一次 promisifyAll() 方法
// 即可实现异步 API 的 Promise 化
import {
  promisifyAll
} from 'miniprogram-api-promise';
const wxp = wx.p = {}
// promisify all wx's api
promisifyAll(wx, wxp)
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})