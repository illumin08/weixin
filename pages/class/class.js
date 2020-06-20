// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    "firstList": [{name: '高一语文上学期同步课（通用版）', money: '36' }, { name: '高一语文下学期同步课（通用版）', money: '48' }, { name: '高二语文上学期同步课（通用版）', money: '72' }, { name: '高二语文下学期同步课（通用版）', money: '34' }, { name: '高三语文三轮复习课（通用版）', money: '36' }, { name: '高三语文一轮复习课（通用版）', money: '72' }, { name: '高一语文上学期同步课（通用版）', money: '36' }, { name: '高一语文下学期同步课（通用版）', money: '48' }, { name: '高二语文上学期同步课（通用版）', money: '72' }, { name: '高二语文下学期同步课（通用版）', money: '34' }, { name: '高三语文三轮复习课（通用版）', money: '36' }, { name: '高三语文一轮复习课（通用版）', money: '72' },],

    "secondList": [{ name: '高中数学选修4-5同步课（通用版）', money: '10' }, { name: '高中数学选修4-1同步课（通用版）', money: '40' }, { name: '高中数学选修4-2同步课（通用版）', money: '10' }, { name: '高中数学选修4-3同步课（通用版）', money: '30' }, { name: '高中数学选修2-5同步课（通用版）', money: '50' }, { name: '高中数学选修3-5同步课（通用版）', money: '30' }, { name: '高中数学选修4-5同步课（通用版）', money: '10' },{ name: '高中数学选修4-4同步课（湘教版）', money: '20' }],

    "thirdList": [{ name: '高三英语一轮复习课（通用版）', money: '30' }, { name: '高一英语下学期同步课（通用版）', money: '30' }, { name: '高二英语上学期同步课（通用版）', money: '30' }, { name: '高三英语二轮复习课（通用版）', money: '30' }, { name: '高三英语三轮复习课（通用版）', money: '30' }, { name: '高二英语下学期同步课（通用版）', money: '30' }, { name: '高三英语一轮复习课（通用版）', money: '30' }, { name: '初升高英语衔接课（通用版）', money: '40' }],

    "fourList": [{ name: '高中物理必修2同步课（鲁科版）', money: '30' }, { name: '高中物理必修3同步课（鲁科版）', money: '30' }, { name: '高中物理必修4同步课（鲁科版）', money: '30' }, { name: '高中物理选修3-1同步课（通用版）', money: '30' }, { name: '高中物理必修2同步课（鲁科版）', money: '30' }, { name: '高中物理必修1同步课（鲁科版）', money: '40' }],

    "List5": [{ name: '高中化学必修1同步课（通用版）', money: '30' }, { name: '高中化学必修1同步课（通用版）', money: '30' }, { name: '高中化学必修1-1同步课（通用版）', money: '30' }, { name: '高中化学必修1同步课（通用版）', money: '30' }, { name: '高中化学必修3同步课（通用版）', money: '30' }, { name: '高中化学必修2同步课（通用版）', money: '40' }],

    "List6": [{ name: '高中生物选修1同步课（通用版）', money: '30' }, { name: '高中生物选修2同步课（通用版）', money: '30' }, { name: '高中生物选修3同步课（通用版）', money: '30' }, { name: '高中生物选修4同步课（通用版）', money: '30' }, { name: '高中生物选修3-1同步课（通用版）', money: '30' }, { name: '高中生物选修3-2同步课（通用版）', money: '40' }],
 
    "List7": [{ name: '高中政治必修1同步课（通用版）', money: '30' }, { name: '高中政治必修2同步课（通用版）', money: '30' }, { name: '高中政治必修4同步课（通用版）', money: '30' },],

    "List8": [{ name: '高三历史一轮复习课（通用版）', money: '30' }, { name: '高三历史二轮复习课（通用版）', money: '30' }, { name: '高三历史三轮复习课（通用版）', money: '30' }, ],

    "List9": [{ name: '高三地理一轮复习课（通用版）', money: '30' }, { name: '高三地理二轮复习课（通用版）', money: '30' }, { name: '高三地理三轮复习课（通用版）', money: '30' }, ],

  },

  
  //swiper切换时会调用
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
  }

})
