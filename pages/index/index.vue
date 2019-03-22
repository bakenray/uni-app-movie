<template>
	<view class="page">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item v-for="image in bannerImages" :key="image.id">
				<image :src="image.image" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 热门超英 -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/icon_hot_title.png" class="hot-icon"></image>
				<view class="hot-title">热门超英</view>
			</view>
			<scroll-view scroll-x="true" class="hot">
				
				<view class="single-poster" v-for="superhero in hotSuperheroList" :key="superhero.id">
					<view class="post-wapper">
						<image :src="superhero.cover" class="poster"></image>
						<view class="movie-name">{{superhero.name}}</view>
						<view class="movie-score-wapper">
							<image src="../../static/icons/icon_star_yellow.png" class="icon-star"></image>
							<image src="../../static/icons/icon_star_yellow.png" class="icon-star"></image>
							<image src="../../static/icons/icon_star_yellow.png" class="icon-star"></image>
							<image src="../../static/icons/icon_star_yellow.png" class="icon-star"></image>
							<image src="../../static/icons/icon_star_yellow.png" class="icon-star"></image>
							<view class="movie-score">{{superhero.score}}</view>
						</view>
					</view>
				</view>	
				
			</scroll-view>
		
		</view>
	</view>
</template>

<script src="./index.js"></script>
<style src="./index.css"></style>
