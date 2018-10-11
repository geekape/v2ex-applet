

var app = getApp()
wx.cloud.init()

// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [],
    hidden: false
  },

  getData: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.cloud.callFunction({
      // 云函数名称
      name: 'v2ex',
      // 传给云函数的参数
      data: {
        url: 'https://www.v2ex.com/api/topics/show.json?node_id=' +  options.id
      },
    })
      .then(res => {
        console.log(res) // 3
        _this.setData({ datas: res.result })
        setTimeout(() => {
          _this.setData({ hidden: true });
        }, 300)
      })
      .catch(console.error)

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