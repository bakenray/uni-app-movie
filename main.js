import Vue from 'vue'
import App from './App'
import common from './common/common.js'

Vue.prototype.$common = common
Vue.prototype.getGlobalUser = function(key){
	var userInfo = uni.getStorageSync(key)
	if(userInfo !=null && userInfo !="" &&userInfo!=undefined){
		return userInfo
	}
	else{
		return null
	}	
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
