Page({
  data: {
    titleBarHeight: 0,
    statusBarHeight: 0,
    flag: false,
    scrollTop: 0
  },
  onLoad(query) {
    my.getSystemInfo({
      success: (res) => {
        const { titleBarHeight, statusBarHeight } = res;
        this.setData({
          titleBarHeight,
          statusBarHeight
        });
      }
    })
  },
  scroll(e) {
    let scrollTop = e.detail.scrollTop;
    this.setData({
      scrollTop
    })
    if (parseInt(scrollTop) > 0) {
      this.setData({
        flag: true
      });
    } else {
      this.setData({
        flag: false
      });
    }
  }
});
