<template>
	<view class="page">
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item v-for="image in bannerImages" :key="image.id">
				<image :src="image.image" class="carousel"></image>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				title: 'Hello',
				bannerImages:[]
			}
		},
		onLoad() {
		var serverUrl = common.serverUrl
		uni.request({
			url: serverUrl +'/index/carousel/list',
			method:'POST',
			success: res => {
				if(res.data.status ===200){
					this.bannerImages = res.data.data
				}
			},
			fail: () => {},
			complete: () => {}
		});

		},
		methods: {

		}
	}
</script>

<style>
	.carousel{
		width:100%;
		height:440upx;
	}
</style>
