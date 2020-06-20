// pages/college/college.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolList: [],
    name: '',
    schList: [],
    //  inputValue: ''

  },

  name: function (e) {
    this.setData({
      name: e.detail.value
    })
    var that = this;
    wx: wx.request({
      url: 'http://localhost:1009/ser',
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
          schList: resData
        })
        console.log(that.data.schList)
       
        var name = that.data.schList[0].name
        var description = that.data.schList[0].description
        var acronym = that.data.schList[0].acronym
        var department = that.data.schList[0].department
        var type = that.data.schList[0].type
        console.log(name)
        wx.navigateTo({
          // url: "../login/login?name=" + name ,
          url: "../school/school?detail=" + name + " | " + description + " | " + acronym + " | " + department + " | " + type

        })

      }


    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:1009/school',
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
          schoolList: res.data
        })
        console.log(this.data.schoolList)
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

  }
})