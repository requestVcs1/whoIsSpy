<template>
  <view class="index-page">
    <!-- <image class="logo" src="@/static/image/logo.png" mode="scaleToFill" /> -->
    <view class="menu-list">
      <view
        class="menu"
        @click="handler(item.type)"
        v-for="item in menuList"
        :key="item.id"
      >
        {{ item.text }}
      </view>
    </view>
    <view v-if="inputVisible" class="input-box">
      <view class="content">
        <input
          v-model="roomCode"
          placeholder="请输入房间号"
          placeholder-class="input-placeholder"
          class="el-input"
          type="number"
        />
        <view class="submit" :class="{ disabled: !roomCode }" @click="submit"
          >好了</view
        >
      </view>
      <view @click="close" class="mask"></view>
    </view>
  </view>
</template>

<script>
import utils from '@/common/js/utils.js'
import messageCom from '@/components/message/message'
export default {
  components: {
    messageCom
  },
  data() {
    return {
      inputVisible: false,
      roomCode: '',
      userInfo: {},
      menuList: [
        {
          id: 0,
          text: '现在开始',
          type: "create"
        },
        {
          id: 1,
          text: '加入房间',
          type: "join"
        }
      ]
    }
  },
  onLoad() {

  },
  methods: {
    close() {
      this.inputVisible = false
    },
    handler(type) {
      switch (type) {
        case 'create':
          this.playNow()
          break;
        case 'join':
          this.joinRoom()
          break;
      }
    },
    // 创建房间
    async playNow() {
      await this.getUserInfo()
      this.createRoom(this.userInfo)
    },
    getUserInfo() {
      return new Promise((resolve) => {
        utils.getUserInfo().then(userInfo => {
          this.userInfo = userInfo
          resolve()
        })
      })
    },
    async joinRoom() {
      await this.getUserInfo()
      this.inputVisible = true
    },
    createRoom(userInfo) {
      const data = {
        name: userInfo.nickName,
        members: [
          {
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl
          }
        ]
      }
      this.$callFun('createRoom', data)
    },
    async submit() {
      if (this.roomCode) {
        const data = {
          nickName: this.userInfo.nickName,
          avatarUrl: this.userInfo.avatarUrl,
          id: this.roomCode
        }
        this.close()
        await this.$callFun('joinRoom', data)
        uni.navigateTo({
          url: `/packageA/playGame/playGame?id=${this.roomCode}`
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.index-page {
  width: 100vw;
  height: 100vh;
  background: #9fd0fd;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  margin: 200rpx;
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}
.menu-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 400rpx;
  .menu {
    padding: 15rpx 30rpx;
    color: $uni-text-color;
    font-size: $uni-font-size-base;
    border-radius: $uni-border-radius-base;
    border: 1rpx solid $custom-border-color;
    text-align: center;
  }
}
.input-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    width: 500rpx;
    height: 300rpx;
    background: #bce2d3;
    border-radius: $uni-border-radius-lg;
    z-index: 99;
    padding: 15rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
  }
  .el-input {
    border: 1rpx solid $custom-border-color;
    border-radius: $uni-border-radius-base;
    width: 80%;
    height: 80rpx;
    font-size: $uni-font-size-base;
    padding: 0 20rpx;
  }
  .submit {
    margin-top: 60rpx;
    padding: 15rpx 30rpx;
    background: #e2ec52;
    border-radius: $uni-border-radius-lg;
    color: #333;
  }
}
</style>
