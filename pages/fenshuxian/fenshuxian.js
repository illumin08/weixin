// pages/fenshuxian/fenshuxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scoreList:[]
  },


  name: function (e) {
    this.setData({
      name: e.detail.value
    })
    var that = this;
    wx: wx.request({
      url: 'http://localhost:1009/score',
      method: "POST",
      header: { "content-type": "application/x-www-form-urlencoded" },
      data: {
        "name": that.data.name,
      },
      success: function (res) {
        // console.log(res)
        // console.log(res.data)
        var resData = res.data;
        that.setData({
          scoreList: resData
        })
        console.log(that.data.scoreList)

        

      }


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