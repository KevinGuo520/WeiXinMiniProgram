// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'World',
    age: 21,
    infos: [
      {name: '牡丹', address: '中国'},
      {name: '郁金香', address: '荷兰'}
    ],
    counter: 0,
    msg: "点我"
  },

  // 自定义函数
  handleBtnClick() {
    // 在控制台输出，用于调试
    console.log(this.data.counter)
    // 设置data中的值，并将新的值更新旧的值
    this.setData({
      counter: this.data.counter + 1,
    })
  },

  handleBtnClick2() {
    this.setData({
      counter: this.data.counter - 1
    })
  },

  handleBtnChange() {
    console.log("点击了..."),
    this.setData({
      msg: this.data.msg = "逗逼...哈哈"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})