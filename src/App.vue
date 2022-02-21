<template>
	<view class="popup">
		adsfadfasd
	</view>
</template>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "common/css/reset.css";
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		width: 400rpx;
		height: 400rpx;
		background: red;
	}
</style>
