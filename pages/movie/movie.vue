<template>
	<view class="page">
		<view class="player">
			<video 
				class="movie-video"
				:src="trailerInfo.trailer"
				:poster="trailerInfo.poster"
				controls
				>
			</video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				trailerInfo:{}
			}
		},
		methods: {
			
		},
		onLoad(params){
			// 页面的查询参数
			let trailerId = params.trailerId
			// 获取预告片的详细信息
			
			uni.showLoading({
				mask:true,
			})
			uni.request({
				url: this.$common.serverUrl + 
				     '/search/trailer/' + trailerId + 
					 '?' + this.$common.qqId,
				method:'POST',
				success: res => {
					if(res.data.status ==200){
						this.trailerInfo = res.data.data
					}
				},
				complete:()=>{
					uni.hideLoading()
				}
			});				
		}
	}
</script>

<style>@import url('movie.css');</style>
