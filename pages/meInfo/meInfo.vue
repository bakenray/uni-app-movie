<template>
	<view class="page ">
		<view class="page-block info-list">
			<view class="list-bar">
				<view class="list-bar-tit">头像</view>
				<view class="list-bar-img">
					<image :src="globalUser.faceImage" class="usrimg"></image>
					<image src="../../static/icon_other/left-gray-arrow.png" class="arrow"></image>
				</view>
			</view>
			
			<view class="list-bar">
				<view class="list-bar-tit">昵称</view>
				<view class="list-bar-img">
					<view class="othername">{{globalUser.nickname}}</view>
					<image src="../../static/icon_other/left-gray-arrow.png" class="arrow"></image>
				</view>
			</view>	
			<view class="list-bar">
				<view class="list-bar-tit">生日</view>
				<view class="list-bar-img">
					<view class="othername">{{globalUser.birthday}}</view>
					<image src="../../static/icon_other/left-gray-arrow.png" class="arrow"></image>
				</view>
			</view>			
			<view class="list-bar">
				<view class="list-bar-tit">性别</view>
				<view class="list-bar-img">
					<view class="othername">
						<view v-if="globalUser.sex==1">男</view>
						<view v-else-if="globalUser.sex==0">女</view>		
						<view v-else>未选择</view>				
					</view>
					<image src="../../static/icon_other/left-gray-arrow.png" class="arrow"></image>
				</view>
			</view>					
		</view>
		<view class="footer-wapper">
			<view class="footer-words" @tap="clearStorage">清理缓存</view>
			<view class="footer-words">退出登录</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser:{}
			}
		},
		onShow(){
			var globalUser = this.getGlobalUser("globalUser")
			this.globalUser = globalUser
		},
		methods: {
			clearStorage(){
				uni.clearStorage();
				uni.showToast({
					title:"清理缓存成功",
					mask:false,
					duration:1600
				})
			}
		}
	}
</script>

<style>
	@import url("meInfo.css");
</style>
