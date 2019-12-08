import { getSystemInfo } from './../../utils/utils';

Page({
  data: {
    titleBarHeight: 0,
    statusBarHeight: 0,
    scrollTop: 0
  },
  async onLoad(query) {
    const { titleBarHeight, statusBarHeight } = await getSystemInfo();
    this.setData({
      titleBarHeight,
      statusBarHeight
    });
  },
  scroll(e) {
    let scrollTop = e.detail.scrollTop;
    this.setData({
      scrollTop
    })
  }
});
