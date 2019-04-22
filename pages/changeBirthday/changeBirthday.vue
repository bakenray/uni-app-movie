<template>
	<view class="page page-fill">
		<form  @submit="formSubmitBirthday">
			<view class="page-block ">
				<picker mode="date" @change="dateChange" >
					<view class="birthday">{{birthday}}</view>
				</picker>
			</view>
			<button type="primary" form-type="submit" class="submitBtn">确认修改</button>
		</form>		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 birthday:'',
				 globalUser:{}
			}
		},
		methods: {
			formSubmitBirthday(e){
				var birthday = this.birthday
				
				uni.request({
					url: this.$common.serverUrl+'/user/modifyUserinfo?'+this.$common.qqId,
					data:{
						"userId" :this.globalUser.id,
						"birthday":birthday
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
			},
			dateChange(e){
				this.birthday  = e.detail.value
			}
		},
		onLoad(){
			var globalUser = this.getGlobalUser('globalUser')
			this.globalUser = globalUser
			this.birthday = this.globalUser.birthday
		}
	}
</script>

<style>
.birthday{
	background: #FFFFFF;
	height:80upx;
	padding:0 20upx;
	line-height: 80upx;
}
</style>
