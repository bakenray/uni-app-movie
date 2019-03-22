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
		
		<!-- 猜你喜欢 -->
		<view class="page-block guess-u-like">
			<view class="hot-title-wapper">
				<image src="../../static/icons/icon_guess_u_like.png" class="hot-icon"></image>
				<view class="hot-title">猜你喜欢</view>
			</view>
			
			<view class="guess-u-like-content" v-for="(guess,gIndex) in guessULike" :key="guess.id">
				<view class="guess-u-like-movie">
					<!-- 封面 -->
					<image :src="guess.cover" class="like-movie-cover"></image>
					<!-- 简介 -->
					<view class="movie-diretion">
						<view class="movie-title">{{guess.name}}</view>
						<trailerStars :innerScore="guess.score" showNum="0"></trailerStars>
						<view class="movie-info">{{guess.basicInfo}}</view>
						<view class="movie-info">{{guess.releaseDate}}</view>
					</view>
					<!-- 点赞-->
					<view class="movie-oper" :data-gIndex="gIndex" @tap="praiseMe">
						<image class="icon-praise" src="../../static/icons/icon_praise.png"></image>
						<view class="praise-me">点赞</view>
						<view :animation="animationDataArr[gIndex]" class="praise-me animation-opactity">+1</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script src="./index.js"></script>
<style src="./index.css"></style>
