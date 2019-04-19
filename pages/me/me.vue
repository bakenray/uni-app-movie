<template>
	<view class="page page-fill">
		<view class="header">
			<view v-if="userIsLogin">
				<image :src="userInfo.faceImage" class="face"></image>
			</view>			
			<view v-else>
				<image src="../../static/icon_other/default-face.png" class="face"></image>
			</view>
			
			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname">{{userInfo.nickname}}</view>
				<view class="nav-info">ID:{{userInfo.id}}</view>
			</view>
			<view v-else>
				<navigator url="../registerLogin/registerLogin">
					<view class="nickname regist-login">注册/登录</view>
				</navigator>
				
			</view>
			
			<view class="set-wapper" v-if="userIsLogin">
				<navigator url="../meInfo/meInfo">
					<image src="../../static/icon_other/settings.png" mode="" class="settings"></image>					
				</navigator>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin:false,
				userInfo:{}
			};
		},
		onShow(){

// 			var userInfo = uni.getStorageSync("globalUser")
// 			if(userInfo !=null && userInfo !="" &&userInfo!=undefined){
// 				this.userIsLogin =true
// 				this.userInfo = userInfo
// 			}
// 			else{
// 				this.userIsLogin =false
// 				this.userInfo = {}
// 			}
			
	// 使用挂载方法获取用户数据		
			var userInfo = this.getGlobalUser("globalUser")
			if(userInfo !=null){
				this.userIsLogin = true
				this.userInfo = userInfo
			}
			else{
				this.userIsLogin =false
				this.userInfo = {}
			}
			
		}
	}
</script>

<style>
@import url('me.css');
</style>
