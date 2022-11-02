Page({
  data: {
    msg: "你好",
    type: 1,
    flag: false,
    arr: ["凉宫", "长门", "阿虚"],
    userList: [{
        id: 1,
        name: "凉宫"
      },
      {
        id: 2,
        name: "长门"
      },
      {
        id: 1,
        name: "阿虚"
      },
    ],
  },
  btnTap2(e) {
    console.log(e);
    this.setData({
      count: this.data.count + e.target.dataset.info,
    });
  },
  inputHandler(e) {
    this.setData({
      msg: e.detail.value,
    });
    console.log(e);
  },
});