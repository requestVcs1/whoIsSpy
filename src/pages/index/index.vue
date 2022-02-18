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
    <view class="input-box">
      <input
        v-model="roomCode"
        placeholder="请输入房间号"
        placeholder-class="input-placeholder"
      />
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
      roomCode: '',
      menuList: [
        {
          id: 0,
          text: '现在开始',
          type:"create"
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
    playNow() {
      utils.getUserInfo().then(res => {
        const userInfo = res.userInfo
        uni.setStorageSync('userInfo', userInfo)
        this.createRoom(userInfo)
      })
    },
    joinRoom() {
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
</style>
