<template>
	<view class="page">
		<!-- 轮播 -->
		<swiper :indicator-dots="true" :autoplay="true" class="banner"  >
			<swiper-item v-for="banner in bannerList" :key="banner.id">
				<navigator open-type="navigate" :url="'../movie/movie?trailerId=' + banner.movieId">
					<image class="banner" :src="banner.image"></image>					
				</navigator>	
			</swiper-item>
		</swiper>
		<!-- 热门超英 -->
		<view class="page-block title-wapper">
			<image src="../../static/icon_other/hot.png" class="icon-hot"></image>
			<view class="hot-title-text">热门超英</view>					
		</view>		
		<view class="page-block super-hot">
			<scroll-view scroll-x="true" class="page-block hot-imgs">
				<view class="single-poster" v-for="hot in hotList" :key="hot.id">
					<view class="poster-wapper">
						<navigator open-type="navigate" :url="'../movie/movie?trailerId=' + hot.id">
							<image class="poster" :src="hot.cover"></image>					
						</navigator>							
						<view class="movie-name tit">{{hot.name}}</view>
						<scorestar :innerScore="hot.score" showNum="1" ></scorestar>
					</view>
				</view>
			</scroll-view>
		</view>	
		<!-- 热门预告 -->
		<view class="page-block title-wapper">
			<image src="../../static/icon_other/interest.png" class="icon-hot"></image>
			<view class="hot-title-text">热门预告</view>					
		</view>		
		<view class="page-block hot-trailer">
			<view class="hot-trailer-movies">
				<video 
				:id="trailer.id"
				:data-playingIndex = "trailer.id"
				@play="meIsPlaying"
				class="trailer-movie-video"
				v-for="trailer in trailerList"
				:key="trailer.id"
				:src="trailer.trailer"
				:poster="trailer.poster"
				controls
				></video>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<view class="page-block title-wapper">
			<image src="../../static/icon_other/guess-u-like.png" class="icon-hot"></image>
			<view class="hot-title-text">猜你喜欢</view>					
		</view>		
		<view class="page-block page-guess-u-like">
			<view class="guess-u-like-bar">
				<view class="guess-u-like-list" v-for="(list,gindex) in guessULike" :key="list.id" >
					<navigator open-type="navigate" :url="'../movie/movie?trailerId=' + list.id">
						<image class="img-u-like" :src="list.cover"></image>		
					</navigator>

					<view class="movie-desc">
						<view class="movie-desc-tit tit">{{list.name}}</view>
						<scorestar :innerScore="list.score" showNum="0" ></scorestar>
						<view class="movie-info tit-2">{{list.basicInfo}}</view>
						<view class="movie-time tit">{{list.releaseDate}}</view>
					</view>
					<view class="movie-opr" :data-gIndex="gindex" @tap="praiseMe">
						<image class="img-thumbs-up" src="../../static/icon_other/praise.png"></image>
						<view class="text-thumbs-up">赞一下</view>
						<view class="text-thumbs-up animation-move" ref="thumbsUp" :class=" isH5ThumbsUp == gindex ?'animation-move-h5':''"  :animation="animationDataArr[gindex]">+1</view>
					</view>
				</view>
			</view>		
		</view>		
	</view>
</template>
<script>
	import scorestar from '@/components/scoreStar/scoreStar.vue'
	
	export default {
		data() {
			return {
				bannerList:[],
				hotList:[],
				trailerList:[],
				guessULike:[],
				animationData:{},
				animationDataArr:[],
				isH5ThumbsUp:null
			}
		},
		components:{
			scorestar
		},
		onHide(){
			if(this.videoContext){
				this.videoContext.pause()
			}
		},
		methods:{
			meIsPlaying(e){
				let trailerId = ''
				if(e){
					trailerId = e.currentTarget.dataset.playingindex
					this.videoContext = uni.createVideoContext(trailerId)
				}
				let trailerList = this.trailerList
				for(var i =0; i<trailerList.length;i++){
					let tempId = trailerList[i].id
					if(tempId != trailerId){
						uni.createVideoContext(tempId).pause()
					}
				}
			},
			
			// 点赞函数
			praiseMe(e){
			let gIndex = e.currentTarget.dataset.gindex
			//#ifdef H5
			// this.$refs.thumbsUp
				this.isH5ThumbsUp = gIndex
				setTimeout(()=>{
					this.isH5ThumbsUp = null
				},1500)
			//#endif

			//#ifdef APP-PLUS ||MP-WEIXIN
				// 点赞动画效果
				this.animation.translateY(-60).opacity(1).step({
					duration:400
				})	
				// 导出动画数据到组件
				this.animationData = this.animation
				this.animationDataArr[gIndex]=this.animationData.export()
				// 定时还原动画
				setTimeout(()=>{
					this.animation.translateY(0).opacity(0).step({
						duration:0
					})
					this.animationData = this.animation
					this.animationDataArr[gIndex] = this.animationData.export()	
				},900)
			//#endif
			},
			// 猜你喜欢-数据获取
			guesULikeRefresh(){ 
				uni.showLoading({
					mask:true
				})
				uni.request({
					url: this.$common.serverUrl+'/index/guessULike?'+ this.$common.qqId,
					method:'POST',
					success: res => {
						if(res.data.status ==200){
							this.guessULike =res.data.data		
						}
					},
					complete:()=>{
						uni.stopPullDownRefresh()
						uni.hideLoading()
					}				
				});		
			},
		},		
		// 下拉刷新 
		onPullDownRefresh(){
			this.guesULikeRefresh()
		},
		onLoad() {
			// 轮播图数据
			uni.request({
				url: this.$common.serverUrl+'/index/carousel/list?'+ this.$common.qqId,
				method:'POST',
				success: res => {
					if(res.data.status ==200){
						this.bannerList =res.data.data		
					}
				}
			});
			// 热门超英
			uni.request({
				url: this.$common.serverUrl+'/index/movie/hot?type=superhero&&'+ this.$common.qqId,
				method:'POST',
				success: res => {
					if(res.data.status ==200){
						this.hotList =res.data.data	
					}
				}
			});
			// 热门预告
			uni.request({
				url: this.$common.serverUrl+'/index/movie/hot?type=trailer&&'+ this.$common.qqId,
				method:'POST',
				success: res => {
					if(res.data.status ==200){
						this.trailerList =res.data.data		
					}
				}
			});	
			// 猜你喜欢			
			this.guesULikeRefresh()	
											
			// 创建动画初始化(只在app和危险小程序可行)
			//#ifdef APP-PLUS ||MP-WEIXIN
				this.animation = uni.createAnimation()		
			//#endif						
		},
		onUnload(){
			//#ifdef APP-PLUS ||MP-WEIXIN
				this.animationData={}
				this.animationDataArr={}
			//#endif	
		}
	}
</script>

<style>@import url("index.css");</style>
