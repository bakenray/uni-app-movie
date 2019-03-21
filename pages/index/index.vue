<template>
	<view class="page">
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item>
				<image src="../../static/banner/banner-1.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/banner/banner-2.jpg" class="carousel"></image>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

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
