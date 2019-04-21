<template>
	<view class="page meFace">
		<view class="pending-wapper">
			<image id="face" class="pending-face" :src="tempFace" mode="scaleToFill"></image>
		</view>
		<view class="notice">
			<view class="notice-words">
				*请从相册中选择等比宽高的图片哦~
			</view>
		</view>
		<view class="footer-opertor">
			<view class="opertor-words" @tap="changeFaceImg">
				重新选择
			</view>
			<view class="opertor-words" @tap="upload">
				确认上传
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tempFace :""
			}
		},
		methods: {
			changeFaceImg(){
				var that = this
				uni.chooseImage({
					count:1,
					sizeType:['origina','compressed'],
					sourceType:['album','camera'],
					success(res){
						// 获得临时路径
						var tempFilePth = res.tempFilePaths[0]
						that.tempFace = tempFilePth
					}
				})
			},
			upload(){
				var that = this
				var globalUser = that.getGlobalUser("globalUser")
				uni.showLoading({
					mask:true,
					title:"文件上传中..."
				})
				uni.uploadFile({
					url: this.$common.serverUrl+'/user/uploadFace?userId='+globalUser.id + '&' + this.$common.qqId,
					filePath:that.tempFace,
					name:"file",
					header:{
						"headerUserId":globalUser.id,
						"headerUserToken":globalUser.userUniqueToken
					},
					success(res){
						var resDataStr = res.data
						var resData = JSON.parse(resDataStr)
						if(resData.status ===200){
							var userInfo = resData.data
							uni.setStorageSync("globalUser",userInfo)
							
// 							uni.navigateBack({
// 								delta:1
// 							})
						} else if( resData.status ==502 || resData.status ==500){
							uni.showToast({
								title:res.data.msg,
								image:"../../static/icon-other/error.png",
								duration:1800
							})
						}
					},
					complete(){
						uni.hideLoading()
					}
					
				})
			}
		},
		onLoad(params){
			var tempFilePath = params.tempFilePath
			this.tempFace =tempFilePath
		}
	}
</script>

<style>
.meFace{
	width:100%;
	height:100%;
	background: #000000;
	position: absolute;
	color:#ccc;
	font-size: 14px;
	box-sizing: border-box;
}
.notice{
	text-align: center;
	padding-top:40upx;
	color:#565656;
}
.pending-wapper{
	padding: 40upx 0;
}
.pending-face{
	width:710upx;
	height:710upx;
	display: block;
	margin:auto;
}
.footer-opertor{
	width:100%;
	position: fixed;
	bottom:0;
	left: 0;
	border-top:1px solid rgba(255,255,255,.3);
	display: flex;
	justify-content: space-between;
	align-items: center;
	color:#eee;
	height:100upx;
	font-size: 14px;
	padding:0 20upx;
	background: #000000;
}

</style>
