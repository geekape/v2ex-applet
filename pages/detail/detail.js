const formatTime = require('../../utils/formatTime.js')

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: [],
    message: [],
    hidden: false
  },
  loadDetail: function(id) {
    var _this = this
    wx.cloud.callFunction({
      // 云函数名称
      name: 'v2ex',
      // 传给云函数的参数
      data: {
        url: 'https://www.v2ex.com/api/topics/show.json?id=' + id
      },
    })
      .then(res => {
        res.result[0].created = formatTime.ago(res.result[0].created)
        _this.setData({ detailData: res.result[0] })
        
      })
      .catch(console.error)
    
    wx.cloud.callFunction({
      // 云函数名称
      name: 'v2ex',
      // 传给云函数的参数
      data: {
        url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + id
      },
    })
      .then(res => {
        // 格式化时间
        res.result.forEach(item => item.created = formatTime.ago(item.created))

        _this.setData({ message: res.result })

        setTimeout(() => {
          _this.setData({ hidden: true });
        }, 300)
      })
      .catch(console.error)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载传过来的id值
    this.loadDetail(options.id)
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