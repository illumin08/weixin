
var newsData=require("../../data/newsdata.js");

Page({
  data: {
     isplayer:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options为页面跳转所带来的参数
    this.setData(newsData.initData[options.newsid])
    this.setData({
      newsid:options.newsid
    })



    //第一次进入时判断是否存在本地存储以及是否收藏
    var newsCollect = wx.getStorageSync('newsCollect');
    //如果newsCollect存在，则代表以前收藏过或是取消收藏过
    if (newsCollect) {
      var newCollect = newsCollect[options.newsid];
      this.setData({
        collected: newCollect
      })
    } else {
      //第一次进入，根本不存在数据
      var newsCollect = {};
      //把当前唯一的id扔到newsCollect对象中，然后默认指定false
      newsCollect[options.newsid] = false;
      //扔到本地存储
      wx: setStorageSync('newsCollect', newsCollect);
    }
  },


  collectTap: function (event) {
    //注意newsCollect是所有数据的集合
    var newsCollect = wx.getStorageSync('newsCollect');

    //newCollect是当前一条数据的集合
    var newCollect = newsCollect[this.data.newsid];
    //点击时，如果收藏就取消，反之
    newCollect = !newCollect;
    //更新到本地存储
    newsCollect[this.data.newsid] = newCollect;
    wx.setStorageSync('newsCollect', newsCollect);
    //更新视图
    this.setData({
      collected: newsCollect[this.data.newsid]
    })

    wx.showToast({
      title: newsCollect[this.data.newsid] ? '收藏成功' : '取消收藏',
      icon: 'success',
      duration: 800,
      mask: true
    })
  },

  onShowTap:function(event){
   
    
    wx.showActionSheet({
      itemList: ['分析到微信', '分析到微博', '分享到QQ'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
    
  },

  onShareAppMessage:function(){
    return{
      title: newsData.initData[this.data.newsid].title,
      path:'/pages/news/news-detail/news-detail'
    }
  },

  
    
  


})