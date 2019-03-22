	import common from "../../common/common.js"
	import trailerStars from "../../components/trailerStars.vue"
	
	export default {
		data() {
			return {
				title:'Hello',
				bannerImages:[],
				hotSuperheroList:[],
				hotTrailerList:[]
			}
		},
		onLoad() {
		var serverUrl = common.serverUrl
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
					console.log(this.hotTrailerList)
				}
			}
		});	
// 		// 猜你喜欢
// 		uni.request({
// 			url: serverUrl+ '/index/guessULike',
// 			method:'POST',
// 			success: res => {
// 				if(res.data.status ===200){
// 					console.log(res)
// 				}
// 			},
// 		});
		},
		methods: {
		},
		components:{
			trailerStars
		}
	}