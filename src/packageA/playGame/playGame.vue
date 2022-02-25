<template>
  <view class="playGame-page">
    <view class="user-list">
      <view
        class="user-box"
        :class="{ owner: item.owner === item.openid }"
        v-for="(item, index) in members"
        :key="item.openid"
      >
        <image class="cover" :src="item.avatarUrl"></image>
        <view class="userName">{{ item.nickName }}</view>
        <view class="num">{{ index + 1 }}号玩家</view>
      </view>
    </view>
    <view class="message-wrap">
      <view class="messages"> </view>
      <input
        class="message-input"
        v-model="inputVal"
        placeholder="骂几句把..."
        confirm-type="Send"
      />
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
      owner: '',
      inputVal: ''
    }
  },
  methods: {
    async getRoomInfo(data) {
      const result = await this.$callFun('getRoomInfo', data)
      console.log(result)
      if (result.data) {
        this.owner = result.data.owner
        this.members = result.data.members
      }
      // if (info.owner) {
      //   this.owner = info.owner
      //   this.members = info.members
      // }
    }
  }
}
</script>

<style lang='scss' scoped>
.playGame-page {
  width: 100vw;
  height: 100vh;
  padding: 20rpx 30rpx;
  background: #845584;
  display: flex;
  flex-direction: column;
}
.user-list {
  flex: 1;
}
.message-wrap {
  width: 100%;
  height: 400rpx;
  display: flex;
  flex-direction: column;
  background: #f1e8e8;
  padding: 15rpx;
  align-items: center;
  .message-input {
    width: 80%;
    height: 50rpx;
    border-radius: $uni-border-radius-sm;
    border: 1px solid #ccc;
  }
  .messages {
    flex: 1;
  }
}
.user-box {
  width: 100%;
  height: 140rpx;
  border-radius: $uni-border-radius-lg;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  margin-bottom: 20rpx;
  // background: linear-gradient(
  //   rgba(255, 255, 255, 0.1) -150%,
  //   rgba(255, 255, 255, 0.8) 50%,
  //    rgba(255, 255, 255, 0.8) 50%,
  //   rgba(255, 255, 255, 0.1) 150%
  // );
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5rpx rgba(0, 0, 0, 0.5);
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