<template>
	<view class="page page-fill">
		<form  @submit="formSubmitNickname">
			<view class="page-block changeNickname-inputbar">
				<input 
					type="text" 
					name="nickname" 
					:value="globalUser.nickname" 
					class="input" 
					placeholder="请输入昵称"
					placeholder-class="graywords"
					 maxlength="15"
				/>
			</view>
			<button type="primary" form-type="submit" class="submitBtn">确认修改</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser:{}
			}
		},
		methods: {
			formSubmitNickname(e){
				var nickname =e.detail.value.nickname
				
				uni.request({
					url: this.$common.serverUrl+'/user/modifyUserinfo?'+this.$common.qqId,
					data:{
						"userId" :this.globalUser.id,
						"nickname":nickname
					},
					header:{
						"headerUserId":this.globalUser.id,
						"headerUserToken":this.globalUser.userUniqueToken
					},
					method:'POST',
					success: res => {
						var resData = res.data
						if(resData.status ===200){
							var userInfo = resData.data
							uni.setStorageSync("globalUser",userInfo)
							uni.navigateBack({
								delta:1
							})
						} else if( resData.status ==502 || resData.status ==500){
							uni.showToast({
								title:res.data.msg,
								image:"../../static/icon-other/error.png",
								duration:1800
							})
						}
					}
				});					
			}
		},
		onLoad(){
			var globalUser = this.getGlobalUser('globalUser')
			this.globalUser = globalUser
		}
	}
	
</script>

<style>
.changeNickname-inputbar{

}
.input{
	height:80upx;
	line-height: 80upx;
}
</style>
