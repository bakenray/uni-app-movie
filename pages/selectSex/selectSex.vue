<template>
	<view class="page page-fill">
		<form  @submit="formSubmitSex">
			<view class="page-block">
				<radio-group class="radio-sex"  @change="sexChange" >
					<label class="radio-list">
						<radio value="1" :checked="sex==1"/>男
					</label>
					<label class="radio-list">
						<radio value="0" :checked="sex==0" />女
					</label>										
				</radio-group>
			</view>
			<button type="primary" form-type="submit" class="submitBtn">确认修改</button>
		</form>				
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser:{},
				sex:"-1"
			}
		},
		methods: {
			sexChange(e){
				this.sex = e.detail.value
			},
			formSubmitSex(){
				var sex = this.sex
				
				uni.request({
					url: this.$common.serverUrl+'/user/modifyUserinfo?'+this.$common.qqId,
					data:{
						"userId" :this.globalUser.id,
						"sex":sex
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
			this.sex = this.globalUser.sex
		}
	}
</script>

<style>
	.radio-sex{
		display: flex;
		flex-direction: column;
		
	}
.radio-list{
	width:100%;
	height:100upx;
	line-height:100upx;
	padding:0 20upx;
	border-bottom:1px solid #eee;
}
</style>
