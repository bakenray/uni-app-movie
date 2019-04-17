<template>
	<view class="cover-block">
		<image 
		:src="cover" 
		mode="widthFix" 
		class="cover-img"
		@longpress="longTap"
		></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover:''
			}
		},
		methods: {
			longTap(){
				uni.showActionSheet({
					itemList:['保存图片'],
					success: res => {
						if(res.tapIndex ==0){
							uni.showLoading({
								title: '图片保存中...',
							})
							uni.downloadFile({
								url:this.cover,
								success:(result)=>{
									let tempFilePath = result.tempFilePath
									uni.saveImageToPhotosAlbum({
										filePath:tempFilePath,
										success:()=>{
											uni.showToast({
												title:"保存成功",
												duration:2000
											})
										},
										complete:()=>{
											uni.hideLoading()
										}
									})
								}
								
							})

						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad(params){
			this.cover = params.cover
			
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:"#000000"
			})
		}
	}
</script>

<style>
.cover-block{
	background: #000000;
	width:100%;
	height:100%;
	display:  flex;
	flex-direction: column;
	position:fixed;
}
.cover-img{
	align-self:center;
	justify-content: center;
}

</style>
