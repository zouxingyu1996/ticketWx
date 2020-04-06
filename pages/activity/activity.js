// pages/strategy/strategy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://ytspiao.ytsshop.com/index.php/api/doings/details',
      data: {
        id: options.id
      },
      success: function (res) {
        if (res.data.code == 1) {
          // console.log(res.data.data.details)
          var WxParse = require('../../wxParse/wxParse.js');
          WxParse.wxParse('article', 'html', res.data.data.details, that);
          that.setData({
            list: res.data.data.name
          })
        }
      }
    })
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