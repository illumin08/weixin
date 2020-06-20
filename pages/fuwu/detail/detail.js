var newsData = require("../../data/fuwudata.js");

Page({
  data: {
    // isplayer: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options为页面跳转所带来的参数
    this.setData(newsData.initData[options.newsid])
    this.setData({
      newsid: options.newsid
    })


  },








})