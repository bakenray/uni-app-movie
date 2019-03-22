<template name="trailerStars">
	<view class="movie-score-wapper">
		<image v-for="yellow in yellowScore" src="../../static/icons/icon_star_yellow.png" class="icon-star"></image>
		<image v-for="gray in grayScore" src="../../static/icons/icon_star_gray.png" class="icon-star"></image>
		<view class="movie-score" v-if="showNum ==1">{{innerScore}}</view>
	</view>
</template>
<script>
	export default {
		name:"trailerStars",
		data() {
			return {
				yellowScore:0,
				grayScore:5
			}
		},
		props:{
			innerScore:0,
			showNum:0
		},
		created(){
			var tempScore = 0
			if(this.innerScore !=null && this.innerScore != undefined && this.innerScore !=''){
				tempScore = this.innerScore
			}
			var yellowScore = parseInt(tempScore/2)
			var grayScore = 5 - yellowScore
			this.yellowScore = yellowScore
			this.grayScore = grayScore
		}
	}
</script>
<style>
	.movie-score-wapper{
		display: flex;
		flex-direction: row;
	}
	.icon-star{
		width:22upx;
		height:22upx;
		margin:6upx 2upx;
	}
	.movie-score{
		font-size: 12upx;
		color:grey;
		margin-left:10upx;
	}
</style>
