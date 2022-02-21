<template>
  <view class="playGame-page">
    <view
      class="user-wrap"
      :class="{ owner: item.owner === item.openid }"
      v-for="(item, index) in members"
      :key="item.openid"
    >
      <image class="cover" :src="item.avatarUrl"></image>
      <view class="userName">{{ item.nickName }}</view>
      <view class="num">{{ index + 1 }}号玩家</view>
    </view>
  </view>
</template>

<script>
export default {
  onLoad(query) {
    if (query.id) {
      const data = {
        id: query.id
      }
      uni.setNavigationBarTitle = `${query.id}号房间`
      this.getRoomInfo(data)
    }
  },
  data() {
    return {
      members: [],
      owner: ''
    }
  },
  methods: {
    async getRoomInfo(data) {
      const { data:info } = await this.$callFun('getRoomInfo', data)
      this.owner = info.owner
      this.members = info.members
    }
  }
}
</script>

<style lang='scss' scoped>
.playGame-page {
  width: 100vw;
  height: 100vh;
  padding: 20rpx 30rpx;
}
.user-wrap {
  width: 100%;
  height: 140rpx;
  border: 4rpx solid #000;
  border-radius: $uni-border-radius-lg;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  margin-bottom: 20rpx;
  .cover {
    border-radius: 50%;
    width: 100rpx;
    height: 100rpx;
    margin-right: 20rpx;
  }
  .num {
    text-align: center;
  }
}
.userName {
  flex: 1;
}
.owner {
  border-color: #fff01e;
}
</style>