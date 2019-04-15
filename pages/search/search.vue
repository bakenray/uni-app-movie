<template>
	<view class="page">
		<view class="search-block">
			<view class="search-icon-wapper">
				<image class="icon-search" src="../../static/icon_other/search.png"></image>
			</view>
			<input 
			type="text" 
			placeholder="搜索预告" 
			maxlength="10" 
			class="search-text"
			confirm-type="search"
			@confirm="searchMe"
			 >
		</view>
		<view class="movie-list page-block">
			<view class="movie-wapper">
				<image 
				class="poster img-search-list" 
				v-for="img in searchImgs" 			
				:src="img.cover" 
				:key="img.id"
				:data-trailerId = "img.id"	
				@tap="showTrailer"
				></image>				
			</view>		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchImgs:[],
				keywords:'',
				page:1,
				totalPages:1
			};
		},
		methods:{
			pagedTrailerList(keywords,page,pageSize){
				uni.showLoading({
					mask:true,
					title:'请稍后...'
				})
				uni.request({
					url: this.$common.serverUrl + 
					     '/search/list?keywords=' + keywords +
						 '&page='+ page +
						 '&pageSize='+ pageSize +
						 '&'+this.$common.qqId,
					method:'POST',
					success: res => {
						if(res.data.status ==200){
							var tempList = res.data.data.rows
							this.searchImgs = this.searchImgs.concat(tempList)
							this.totalPages = res.data.data.total
							this.page = res.data.data.page
						}
					},
					complete:()=>{
						uni.hideLoading()
					}
				});				
				
			},
			searchMe(e){
				let value = e.detail.value
				this.keywords = value
				this.searchImgs = []
				this.pagedTrailerList(value,1,15)
			},
			showTrailer(e){
				let trailerId  = e.currentTarget.dataset.trailerid
				uni.navigateTo({
					url:'../movie/movie?trailerId='+trailerId
				})
			}
		},
		onLoad(){
			this.pagedTrailerList('','','')
		},
		onReachBottom(){
			let page = this.page + 1
			let keywords = this.keywords
			let totalPages = this.totalPages
			if(page<totalPages){
				this.pagedTrailerList(keywords,page,15)
			}
			
		}
	}
</script>

<style>
@import url("search.css");

</style>
