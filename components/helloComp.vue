<template name="helloComp">
	<view>{{msg}}
	<input type="text" :value="myval">
	</view>
</template>

<script>
	export default {
		name:"helloComp",
		data() {
			return {
				msg:'我是自定义组件的内容'
			};
		},
		props:{
			myval:{
				type:String
			}
		}
	}
</script>

<style></style>
