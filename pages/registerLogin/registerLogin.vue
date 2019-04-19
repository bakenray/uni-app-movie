<template>
	<view class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image src="../../static/icon_other/default-face.png" class="face"></image>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input type="text" name="username" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">密码</label>
				<input type="text" name="password" password="true" value="" class="input" placeholder="请输入密码" placeholder-class="graywords"/>
			</view>	
			<button type="primary" form-type="submit"  class="button-submit">注册/登录</button>
		</form>
				
		<!-- #ifndef H5 -->
		<view class="third-words">第三方账号登录</view>
		
		<view class="third-icon-wapper">
			<!-- #ifdef APP-PLUS -->
			<image src="../../static/icon_other/weixin.png" class="third-icon"></image>
			<image src="../../static/icon_other/QQ.png" class="third-icon"></image>
			<image src="../../static/icon_other/weibo.png" class="third-icon"></image>			
			<!-- #endif -->
			
			<!-- #ifdef MP-WEIXIN -->
<!-- 			<button  open-type="getUserInfo" @getuserinfo="wxLogin" class="third-login-weixin">
				<image src="../../static/icon_other/weixin.png" class="third-icon"></image>
			</button> -->
			<!-- #endif -->
		</view>
		<!-- #endif -->		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
		// #ifdef MP-WEIXIN
			// 微信小程序端的微信登录
			wxLogin(e){
				// 获取微信用户信息
				var userInfo = e.detail.userInfo
				var serverUrl = this.$common.serverUrl
				var qqID = this.$common.qqId
				uni.login({
					provider:"weixin",
					success(result){
						// 获得微信登录code,授权码
						var code = result.code 
						// 设置登录到哪个后端小程序，0-next超英预告，1-超英预告，2-next学院电影预告
						var loginToWhichMP = 1
						uni.request({
							url:serverUrl+'/stu/mpWXLogin/'+ code + "?"+ qqID,
							data:{
								"avatarUrl":userInfo.avatarUrl,
								"nickName":userInfo.nickName,
								"whichMP":loginToWhichMP
							},
							method:"POST",
							success(result){
								console.log(result)
							}
						})			
					}
				})
			},
		// #endif
			formSubmit(e){
				var username = e.detail.value.username
				var password = e.detail.value.password
			// 登录注册请求
			uni.request({
				url: this.$common.serverUrl+'/user/registOrLogin?'+ this.$common.qqId,
				data:{
					"username":username,
					"password":password
				},
				method:'POST',
				success: res => {
					if(res.data.status ==200){
						var userInfo = res.data.data
						// 保存用户信息到全局缓存中
						uni.setStorageSync("globalUser",userInfo)
						// 登录成功后,使用tab切换api
						uni.switchTab({
							url:"../me/me"
						})
					}
					else if(res.data.status ==500){
						uni.showToast({
							title:res.data.msg,
							duration:2000,
							image:'../../static/icon_other/error.png'
						})
					}
				}
			});				
			},
		}
	}
</script>

<style>
@import url("registerLogin.css");
</style>

