
var newsData=require("../data/newsdata.js");



Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    circular:true,
   
  },

  onLoad:function(options){
    console.log(newsData);

    // this.setData可以让view重绘
    this.setData({
     userData:newsData.initData
    })
  },

  goNewsDetail:function(event){
    var newsId = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'news-detail/news-detail?newsid=' + newsId
    })
  }

})


