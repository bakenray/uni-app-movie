<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<view class="list-bar" @tap="operator">
				<view class="list-bar-tit">头像</view>
				<view class="list-bar-img">
					<image :src="globalUser.faceImage" class="usrimg"></image>
					<image src="../../static/icon_other/left-gray-arrow.png" class="arrow"></image>
				</view>
			</view>
			<!-- 修改昵称 -->
			<navigator url="/pages/changeNickname/changeNickname">
				<view class="list-bar">
					<view class="list-bar-tit">昵称</view>
					<view class="list-bar-img">
						<view class="othername">{{globalUser.nickname}}</view>
						<image src="../../static/icon_other/left-gray-arrow.png" class="arrow"></image>
					</view>
					
				</view>	
			</navigator>
			<navigator url="/pages/changeBirthday/changeBirthday">			
				<view class="list-bar">
					<view class="list-bar-tit">生日</view>
					<view class="list-bar-img">
						<view class="othername">{{globalUser.birthday}}</view>
						<image src="../../static/icon_other/left-gray-arrow.png" class="arrow"></image>
					</view>
				</view>		
			</navigator>	
			<navigator url="/pages/selectSex/selectSex">									
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
			</navigator>					
		</view>
		<view class="footer-wapper">
			<view class="footer-words" @tap="clearStorage">清理缓存</view>
			<view class="footer-words" @tap="logout">退出登录</view>
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
			operator(){
				var globalUser =this.getGlobalUser("globalUser")
				uni.showActionSheet({
					itemList:["查看头像","修改头像"],
					success(res){
						var index =res.tapIndex
						if(index == 0){
							// 查看头像
							var faceArr=[]
							faceArr.push(globalUser.avatarUrl)
							uni.previewImage({
								urls:faceArr,
								current:faceArr[0]
							})
						}
						else if(index==1){
							// 上传头像
							uni.chooseImage({
								count:1,
								sizeType:['origina','compressed'],
								sourceType:['album','camera'],
								success(res){
									// 获得临时路径
									var tempFilePth = res.tempFilePaths[0]
									uni.navigateTo({
										url:'../meFace/meFace?tempFilePath=' + tempFilePth
									})
								}
							})
							uni.navigateTo({
								url:'../meFace/meFace'
							})
						}
					}
				})
			},
			clearStorage(){
				uni.clearStorage();
				uni.showToast({
					title:"清理缓存成功",
					mask:false,
					duration:1600
				})
			},
			// 退出登录
			logout(){
				var globalUser = this.getGlobalUser("globalUser")
				uni.request({
					url: this.$common.serverUrl+'/user/logout?userId=' + globalUser.id + '&&'+ this.$common.qqId,
					method:'POST',
					success: res => {
						if(res.data.status ==200){
							uni.removeStorageSync('globalUser')
							uni.switchTab({
								url:'../me/me'
							})
						}
					}
				});	
			}
		}
	}
</script>

<style>
	@import url("meInfo.css");
</style>
