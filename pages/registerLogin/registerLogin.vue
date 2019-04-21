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
			<image src="../../static/icon_other/weixin.png" data-logintype="weixin" @tap="appOAuthLogin" class="third-icon"></image>
			<image src="../../static/icon_other/QQ.png" data-logintype="qq" @tap="appOAuthLogin" class="third-icon"></image>
			<image src="../../static/icon_other/weibo.png" data-logintype="sinaweibo" @tap="appOAuthLogin" class="third-icon"></image>			
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
			appOAuthLogin(e){
				var serverUrl = this.$common.serverUrl
				var qqID = this.$common.qqId				
				// 获取用户的登录类型
				var logintype =e.currentTarget.dataset.logintype
				// 授权登录
				uni.login({
					provider:logintype,
					success(loginres){
						// 授权登录登录成功后,获取用户信息
						uni.getUserInfo({
							provider:logintype,
							success(info) {
								// console.log(JSON.stringify(info))
								var userInfo = info.userInfo
								var face = ""
								var nickname=""
								var openIdOrUid = ""
								if(logintype== "weixin"){
									face = userInfo.avatarUrl
									nickname =userInfo.nickName
									openIdOrUid = userInfo.openId
								} else if(logintype== "qq"){
									face = userInfo.figureurl_qq_2
									nickname =userInfo.nickname
									openIdOrUid = userInfo.openid
								} else if(logintype== "sinaweibo"){		
									face = userInfo.avatar_large
									nickname =userInfo.nickname
									openIdOrUid = userInfo.id
								}
								// 调用开发者后台,执行一键注册或登录
								uni.request({
									url: serverUrl + '/appUnionLogin/' + logintype + '?'+qqID,
									data:{
										"face":face,
										"nickname":nickname,
										"openIdOrUid":openIdOrUid
									},
									method:"POST",
									success(result){										
										if(result.data.status ==200){
											var usrInfo = result.data.data
											// 保存用户信息到全局缓存中
											uni.setStorageSync('globalUser',userInfo)
											// 切换页面跳转,使用tab切换api
											uni.switchTab({
												url:"../me/me"
											})
										}
									}
								})					
							}
						})
					}
				})
			},
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

