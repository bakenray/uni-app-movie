<script>
	export default {
// 		onLaunch: function () {
// 			console.log('App Launch')
// 		},
// 		onShow: function () {
// 			console.log('App Show')
// 		},
// 		onHide: function () {
// 			console.log('App Hide')
// 		}
	}
</script>

<style>
	/*每个页面公共css */
	*{
		box-sizing: border-box;
	}
	.page{
		width:100%;
		height:100%;
		background-color: #f7f7f7;
	}
	.page-block{
		background: #fff;
	}
	.tit{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.tit-2{
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;		
		overflow: hidden;
		text-overflow: ellipsis;		
	}
	.line-wapper{
		padding:20upx;
		background: #f7f4f9;
	}
	.line{
		height: 1px;
		background: #ddd;
	}	
	.title-1{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
