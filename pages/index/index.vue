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
						<!-- 评分组件 -->
						<trailerStars :innerScore="superhero.score" showNum="1"></trailerStars>
					</view>
				</view>	
			</scroll-view>
		</view>
		<!-- 热门预告 -->
		<view class="page-block hot-trailer">
			<view class="hot-title-wapper">
				<image src="../../static/icons/iocn_hot_trailer.png" class="hot-icon"></image>
				<view class="hot-title">热门预告</view>
			</view>
			<view class="hot-movies">
				<video v-for="trailer in hotTrailerList"
				controls="true" 
				class="video-bar"
				:src="trailer.trailer" 
				:key="trailer.id"
				:poster="trailer.poster"
				></video>
			</view>
		</view>
	</view>
</template>

<script src="./index.js"></script>
<style src="./index.css"></style>
