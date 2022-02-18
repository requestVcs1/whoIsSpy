<template>
  <view class="message-com" @click="showDrawer">
    <uni-drawer ref="showRight" mode="right">
      <scroll-view style="height: 100%" scroll-y="true"> </scroll-view>
    </uni-drawer>
  </view>
</template>

<script>
import uniDrawer from '@/uni-comonents/uni-drawer/components/uni-drawer/uni-drawer'
export default {
  components: { uniDrawer },
  methods: {
    showDrawer() {
      this.$refs.showRight.open();
      this.getData()
    },
    closeDrawer() {
      console.log(this.$refs.showRight)
    },
    getData() {
      wx.cloud.init()
      wx.cloud.callFunction({
        name:'login'
      }).then(res => {
        console.log(res)
      })
      // const db = this.db
      // const db = wx.cloud.database({
      // })
      // const b = db.collection('room').add({
      //   data: {
      //     name: 'luojing',
      //     age: 27
      //   }
      // }).then(res => {
      //   console.log(res)
      // })
      // db.collection.remoe
    }
  }
}
</script>

<style lang='scss' scoped>
.message-com {
  width: 80rpx;
  height: 80rpx;
  background: red;
}
</style>