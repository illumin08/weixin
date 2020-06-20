// pages/zhuanye/zhuanye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   proList:[],
   profeList:[],
  },

  name: function (e) {
    this.setData({
      name: e.detail.value
    })
    console.log(this.data.name);
    var that = this;
     wx.request({
      url: 'http://localhost:1009/profe',
      method: "POST",
      header: { "content-type": "application/x-www-form-urlencoded" },
      data: {
        "name": that.data.name,
      },
      success: function (res) {
        var resData = res.data;
        that.setData({
          profeList: resData
        })
        console.log(that.data.profeList)
      }
    })
  },

  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 3
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },


 tap:function(e){
   
 },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:1009/pro',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      // data: {
      //   // name: this.data.inputValue
      // },
      success: res => {

        console.log(res)
        console.log(res.data)
        this.setData({
          proList: res.data
        })
        console.log(this.data.proList)
      },
      fail: err => {
        console.log(err)
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

  },
  opens: function (e) {
    switch (e.currentTarget.dataset.item) {
      case "1":
        if (this.data.isstart) {
          this.setData({
            isstart: false,
          });
        }
        else {
          this.setData({
            isstart: true,
          });
        }
        break;
    }
  },
  onclicks1: function (e) {
    var index = e.currentTarget.dataset.index;
    let name = this.data.slist[index].name;
    this.setData({
      isstart: false,
      isfinish: false,
      isdates: false,
      start: this.data.slist[index].name,
      finish: "目的地"
    })
  }


})