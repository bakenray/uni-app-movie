(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meInfo-meInfo"],{"2c2d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page page-fill"},[i("v-uni-view",{staticClass:"page-block info-list"},[i("v-uni-view",{staticClass:"list-bar",on:{click:function(e){e=t.$handleEvent(e),t.operator(e)}}},[i("v-uni-view",{staticClass:"list-bar-tit"},[t._v("头像")]),i("v-uni-view",{staticClass:"list-bar-img"},[i("v-uni-image",{staticClass:"usrimg",attrs:{src:t.globalUser.faceImage}}),i("v-uni-image",{staticClass:"arrow",attrs:{src:"../../static/icon_other/left-gray-arrow.png"}})],1)],1),i("v-uni-navigator",{attrs:{url:"/pages/changeNickname/changeNickname"}},[i("v-uni-view",{staticClass:"list-bar"},[i("v-uni-view",{staticClass:"list-bar-tit"},[t._v("昵称")]),i("v-uni-view",{staticClass:"list-bar-img"},[i("v-uni-view",{staticClass:"othername"},[t._v(t._s(t.globalUser.nickname))]),i("v-uni-image",{staticClass:"arrow",attrs:{src:"../../static/icon_other/left-gray-arrow.png"}})],1)],1)],1),i("v-uni-navigator",{attrs:{url:"/pages/changeBirthday/changeBirthday"}},[i("v-uni-view",{staticClass:"list-bar"},[i("v-uni-view",{staticClass:"list-bar-tit"},[t._v("生日")]),i("v-uni-view",{staticClass:"list-bar-img"},[i("v-uni-view",{staticClass:"othername"},[t._v(t._s(t.globalUser.birthday))]),i("v-uni-image",{staticClass:"arrow",attrs:{src:"../../static/icon_other/left-gray-arrow.png"}})],1)],1)],1),i("v-uni-navigator",{attrs:{url:"/pages/selectSex/selectSex"}},[i("v-uni-view",{staticClass:"list-bar"},[i("v-uni-view",{staticClass:"list-bar-tit"},[t._v("性别")]),i("v-uni-view",{staticClass:"list-bar-img"},[i("v-uni-view",{staticClass:"othername"},[1==t.globalUser.sex?i("v-uni-view",[t._v("男")]):0==t.globalUser.sex?i("v-uni-view",[t._v("女")]):i("v-uni-view",[t._v("未选择")])],1),i("v-uni-image",{staticClass:"arrow",attrs:{src:"../../static/icon_other/left-gray-arrow.png"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"footer-wapper"},[i("v-uni-view",{staticClass:"footer-words",on:{click:function(e){e=t.$handleEvent(e),t.clearStorage(e)}}},[t._v("清理缓存")]),i("v-uni-view",{staticClass:"footer-words",on:{click:function(e){e=t.$handleEvent(e),t.logout(e)}}},[t._v("退出登录")])],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"2c89":function(t,e,i){"use strict";i.r(e);var a=i("88b7"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},4600:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".list-bar[data-v-539b97d2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?%;border-bottom:1px solid #eee;color:#565656}.list-bar-img[data-v-539b97d2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.usrimg[data-v-539b97d2]{width:%?80?%;height:%?80?%;border-radius:50%}.arrow[data-v-539b97d2]{margin:0 %?10?%;width:%?30?%;height:%?30?%}.othername[data-v-539b97d2]{color:#bbb}.footer-wapper[data-v-539b97d2]{position:fixed;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.footer-words[data-v-539b97d2]{text-align:center;background-color:#fff;padding:%?20?%;color:#333;font-size:16px;border-top:1px solid #eee}",""])},5790:function(t,e,i){"use strict";var a=i("d8d1"),s=i.n(a);s.a},"88b7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{globalUser:{}}},onShow:function(){var t=this.getGlobalUser("globalUser");this.globalUser=t},methods:{operator:function(){var t=this.getGlobalUser("globalUser");uni.showActionSheet({itemList:["查看头像","修改头像"],success:function(e){var i=e.tapIndex;if(0==i){var a=[];a.push(t.avatarUrl),uni.previewImage({urls:a,current:a[0]})}else 1==i&&(uni.chooseImage({count:1,sizeType:["origina","compressed"],sourceType:["album","camera"],success:function(t){var e=t.tempFilePaths[0];uni.navigateTo({url:"../meFace/meFace?tempFilePath="+e})}}),uni.navigateTo({url:"../meFace/meFace"}))}})},clearStorage:function(){uni.clearStorage(),uni.showToast({title:"清理缓存成功",mask:!1,duration:1600})},logout:function(){var t=this.getGlobalUser("globalUser");uni.request({url:this.$common.serverUrl+"/user/logout?userId="+t.id+"&&"+this.$common.qqId,method:"POST",success:function(t){200==t.data.status&&(uni.removeStorageSync("globalUser"),uni.switchTab({url:"../me/me"}))}})}}};e.default=a},d8d1:function(t,e,i){var a=i("4600");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("6598a510",a,!0,{sourceMap:!1,shadowMode:!1})},e1b0:function(t,e,i){"use strict";i.r(e);var a=i("2c2d"),s=i("2c89");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("5790");var r=i("2877"),o=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,"539b97d2",null);e["default"]=o.exports}}]);