	import common from "../../common/common.js"
	export default {
		data() {
			return {
				title: 'Hello',
				bannerImages:[],
				hotSuperheroList:[]
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
					console.log(res.data.data)
				}
			}
		});
		
		},
		methods: {
		}
	}