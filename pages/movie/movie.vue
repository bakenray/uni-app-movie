<template>
	<view class="page">
		<!-- 视频播放 -->
		<view class="player">
			<video 
				id="myVideo"
				class="movie-video"
				:src="trailerInfo.trailer"
				:poster="trailerInfo.poster"
				controls
				>
			</video>
		</view>
		<!-- 影片基本信息 -->
		<view class="movie-info">
			<navigator :url="'../cover/cover?cover=' + trailerInfo.cover">
				<image :src="trailerInfo.cover" class="cover"></image>				
			</navigator>

			<view class="movie-desc">
				<view class="movie-desc-tit">{{trailerInfo.name}}</view>
				<view class="basic-info">{{trailerInfo.basicInfo}}</view>
				<view class="basic-info">{{trailerInfo.originalName}}</view>
				<view class="basic-info">{{trailerInfo.totalTime}}</view>			
				<view class="basic-info">{{trailerInfo.releaseDate}}</view>
				<view class="score-block">
					<view class="big-score">
						<view class="score-words">综合评分</view>
						<view class="movie-score-big">{{trailerInfo.score}}</view>
					</view>
					<view class="score-stars">
						<block v-if="trailerInfo.score>=0">
							<scorestar :innerScore="trailerInfo.score" showNum="0"></scorestar>
						</block>		
						<view class="prise-counts">{{trailerInfo.prisedCounts}}人点赞</view>
					</view>
				</view>				
			</view>
		</view>
		<!-- 分割线 -->
		<view class="line-wapper">
			<view class="line"></view>
		</view>
		
		<!-- 剧情介绍 -->
		<view class="plots-block">
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">{{trailerInfo.plotDesc}}</view>
		</view>
		<!-- 演职人员 -->
		<view class="scroll-block">
			<view class="plots-title">演职人员</view>			
			<scroll-view  scroll-x class="scroll-list">
				<view 
				class="actor-waaper" 
				v-for="(director,staffIndex) in directorArray" 
				:key="director.staffId">
				
					<image 
					class="actor-image" 
					:src="director.photo" 
					mode="aspectFill"
					@tap="lookStaffs"
					:data-staffIndex="staffIndex"
					>
					</image>
					<view  class="actor-name title-1">{{director.name}}</view>
					<view  class="actor-role title-1">{{director.actName}}</view>					
				</view>
				
				<view 
				class="actor-waaper" 
				v-for="(actor,actorIndex) in actorArray" 
				:key="actor.staffId">			
					<image 
					class="actor-image" 
					:src="actor.photo" 
					mode="aspectFill"
					@tap="lookStaffs"
					:data-staffIndex="actorIndex + directorArray.length"
					>
					</image>
					<view  class="actor-name title-1">{{actor.name}}</view>
					<view  class="actor-role title-1">{{actor.actName}}</view>	
				</view>				
			</scroll-view>
		</view>		
		
		<!-- 剧照 -->
		<view class="scroll-block">
			<view class="plots-title">剧照</view>			
			<scroll-view  scroll-x class="scroll-list">
				<image 
				class="actor-image" 
				v-for="(plot,index) in plotPicsArray" 
				:src="plot" 
				:key="plot.staffId"
				mode="aspectFill"
				@tap="lookMe"
				:data-imgIndex="index"
				>
				</image>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import scorestar from '@/components/scoreStar/scoreStar.vue'	
	export default {
		data() {
			return {
				trailerInfo:{},
				plotPicsArray:[],
				directorArray:[],
				actorArray:[]
			}
		},
		components:{
			scorestar
		},
		methods: {
			lookMe(e){
				let imgIndex = e.currentTarget.dataset.imgindex
				uni.previewImage({
					urls:this.plotPicsArray,
					current:this.plotPicsArray[imgIndex]
				})
			},
			lookStaffs(e){
				let staffIndex = e.currentTarget.dataset.staffindex
				// 拼接演员和导员的数组
				let directorArray = this.directorArray
				let actorArray = this.actorArray
				let newStaffArray =[]
				newStaffArray =newStaffArray.concat(directorArray).concat(actorArray)
				let urls = []
				for(var i = 0; i<newStaffArray.length;i++){
					let tempPhoto = newStaffArray[i].photo
					urls.push(tempPhoto)
				}
				uni.previewImage({
					urls:urls,
					current:urls[staffIndex]
				})
			}
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
						this.plotPicsArray = JSON.parse(this.trailerInfo.plotPics)
					}
				}
			});	
			// 获取导演信息		
			uni.request({
				url: this.$common.serverUrl + 
				     '/search/staff/' + trailerId + '/1'+
					 '?' + this.$common.qqId,
				method:'POST',
				success: res => {
					if(res.data.status ==200){
						this.directorArray = res.data.data

					}
				}
			});	
			// 获取演员		
			uni.request({
				url: this.$common.serverUrl + 
				     '/search/staff/' + trailerId + '/2'+
					 '?' + this.$common.qqId,
				method:'POST',
				success: res => {
					if(res.data.status ==200){
						this.actorArray = res.data.data
						console.log(this.actorArray )
					}
				}
			});													
		},
		onReady(){
			uni.hideLoading()	
			this.videoContext = uni.createVideoContext('myVideo')
		},
		onHide(){
			this.videoContext.pause()
		},
		onShow(){
// 			if(this.videoContext){
// 				this.videoContext.play()
// 			}	
		},
		// 只支持小程序端
		onShareAppMessage(res){
			return{
				title:'this.trailerInfo.name',
				path:'/pages/movie/movie?trailerId=' + this.trailerInfo.id
			}
		},
		onNavigationBarButtonTap(e){
			
			let trailerInfo  = this.trailerInfo
			let trailerId = trailerInfo.id
			let trailerName = trailerInfo.name			
			let cover = trailerInfo.cover	
			let poster = trailerInfo.poster
				
			if(e.index ==0){
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://192.168.1.8:8080/#/pages/movie/movie?trailerId=" + trailerId,
					title: "NEXT超英预告：《"+ trailerName +"》",
					summary: "NEXT超英预告：《"+ trailerName +"》",
					imageUrl: cover,
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					}
				});
			}
		}
	}
</script>

<style>@import url('movie.css');</style>
