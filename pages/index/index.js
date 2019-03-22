	import common from "../../common/common.js"
	import trailerStars from "../../components/trailerStars.vue"
	
	export default {
		data() {
			return {
				title:'Hello',
				bannerImages:[],
				hotSuperheroList:[],
				hotTrailerList:[],
				guessULike:[],
				animationData:{},
				animationDataArr:[
					{},{},{},{},{}
				]
			}
		},
		onUnload(){
			// 页面卸载时候,清空动画数据
			this.animationData = {}
			this.animationDataArr = [
				{},{},{},{},{}
			]
		},
		onLoad() {
		var serverUrl = common.serverUrl
		// 页面创建时候,创建一个临时动画对象
		//#ifdef APP-PLUS ||MP-WEIXIN
		this.animation= uni.createAnimation();	
		//#endif
				
		// banner
		uni.request({
			url: serverUrl +'/index/carousel/list',
			method:'POST',
			success: res => {
				if(res.data.status ===200){
					this.bannerImages = res.data.data
				}
			}
		});
		// 查询超英热门
		uni.request({
			url: serverUrl +'/index/movie/hot?type=superhero',
			method:'POST',
			success: res => {
				if(res.data.status ===200){
					this.hotSuperheroList = res.data.data
				}
			}
		});
		// 热门预告
		uni.request({
			url: serverUrl +'/index/movie/hot?type=trailer',
			method:'POST',
			success: res => {
				if(res.data.status ===200){
					this.hotTrailerList = res.data.data
				}
			}
		});	
		// 猜你喜欢
		uni.request({
			url: serverUrl+ '/index/guessULike',
			method:'POST',
			success: res => {
				if(res.data.status ===200){
					this.guessULike = res.data.data
				}
			},
		});
		},
		methods: {
			// 点赞动画
			//#ifdef APP-PLUS ||MP-WEIXIN
			praiseMe(e){
				var gIndex = e.currentTarget.dataset.gindex
				console.log(gIndex)
				// 构建动画数据,并且使用step 表示动画完成
				this.animation.translateY(-80).opacity(1).step({
					duration:200
				})
				// 导出动画数据到组件
				this.animationData = this.animation	
				this.animationDataArr[gIndex] = this.animationData.export()
				// 还原动画
				setTimeout(function(){
					this.animation.translateY(0).opacity(0).step({
						duration:0
					})
					this.animationData = this.animation	
					this.animationDataArr[gIndex] = this.animationData.export()
				}.bind(this),1000)
			}
			//#endif
		},
		components:{
			trailerStars
		}
	}