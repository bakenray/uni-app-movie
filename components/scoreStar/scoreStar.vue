<template name="scoreStar">
	<view class="movie-score-wapper">
		<view class="star-y">
			<image class="icon-star" v-for="(yellow,yellowIndex) in yelloScore" :key="yellowIndex" src="../../static/icon_other/star-yellow.png"></image>
		</view>
		<view class="star-g">
			<image class="icon-star" v-for="(gray,grayIndex) in grayScore" :key="grayIndex" src="../../static/icon_other/star-gray.png"></image>	
		</view>
		<view class="movie-score" v-if="showNum">{{innerScore}}</view>
	</view>
</template>

<script>
	export default {
		name:'scoreStar',
		data(){
			return{
				yelloScore:0,
				grayScore:5
			}
		},
		props:{
			innerScore:0,
			showNum:0
		},
		created(){
			
			if(this.innerScore!=null && this.innerScore!=undefined &&this.innerScore!=''){
				this.yelloScore = parseInt(this.innerScore/2)
				this.grayScore = 5  - this.yelloScore		
			}

		}
	}
</script>

<style>
.movie-score-wapper{
	display: flex;
	flex-direction: row;
	align-items: center;
}
.star-g,.star-y{
	display: flex;
	flex-direction: row;
	align-items: center;	
}

.icon-star{
	width:30upx;
	height:30upx;
}
.movie-score{
	font-size: 12px;
	color:grey;
	margin-left:10upx;
}
</style>
