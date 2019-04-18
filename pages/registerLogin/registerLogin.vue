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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
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
