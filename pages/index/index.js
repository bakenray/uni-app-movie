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
				animationData:{}
			}
		},
		onUnload(){
			// 页面卸载时候,清空动画数据
			this.animationData ={}
		},
		onLoad() {
		var serverUrl = common.serverUrl
		// 页面创建时候,创建一个临时动画对象
		this.animation= uni.createAnimation();	
						
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
					console.log(res)
				}
			},
		});
		},
		methods: {
			// 点赞动画
			praiseMe(){
				// 构建动画数据,并且使用step 表示动画完成
				this.animation.translateY(-80).opacity(1).step({
					duration:400
				})
				// 导出动画数据到组件
				this.animationData = this.animation.export()
				// 还原动画
				setTimeout(function(){
					this.animation.translateY(0).opacity(0).step({
						duration:0
					})
					this.animationData = this.animation.export()
				}.bind(this),900)
			}
		},
		components:{
			trailerStars
		}
	}