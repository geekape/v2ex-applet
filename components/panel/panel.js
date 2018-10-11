const formatTime = require('../../utils/formatTime.js')


// components/panel/panel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      value: {},
      observer: function (newData, oldData) {
        this.setData({
          time: formatTime.ago(this.properties.data.created)
        })
      }
    },


  },


  /**
   * 组件的初始数据
   */
  data: {
    time: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    viewDetail: function(event) {
      const id = event.currentTarget.id
      console.log(id)

      const url = '../detail/detail?id=' + id;
      wx.navigateTo({
        url: url,
      })
    }
  },

})
