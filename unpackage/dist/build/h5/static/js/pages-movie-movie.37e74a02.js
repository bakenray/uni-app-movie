(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-movie-movie"],{"0ed6":function(t,e,i){"use strict";var a=i("f7ba"),o=i.n(a);o.a},1001:function(t,e,i){"use strict";i.r(e);var a=i("6e0f"),o=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},4071:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".movie-score-wapper[data-v-f50ac1e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.star-g[data-v-f50ac1e4],.star-y[data-v-f50ac1e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.icon-star[data-v-f50ac1e4]{width:%?30?%;height:%?30?%}.movie-score[data-v-f50ac1e4]{font-size:12px;color:grey;margin-left:%?10?%}",""])},"6e0f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("eb38"));function o(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{trailerInfo:{},plotPicsArray:[],directorArray:[],actorArray:[]}},components:{scorestar:a.default},methods:{lookMe:function(t){var e=t.currentTarget.dataset.imgindex;uni.previewImage({urls:this.plotPicsArray,current:this.plotPicsArray[e]})},lookStaffs:function(t){var e=t.currentTarget.dataset.staffindex,i=this.directorArray,a=this.actorArray,o=[];o=o.concat(i).concat(a);for(var r=[],s=0;s<o.length;s++){var n=o[s].photo;r.push(n)}uni.previewImage({urls:r,current:r[e]})}},onLoad:function(t){var e=this,i=t.trailerId;uni.showLoading({mask:!0}),uni.request({url:this.$common.serverUrl+"/search/trailer/"+i+"?"+this.$common.qqId,method:"POST",success:function(t){200==t.data.status&&(e.trailerInfo=t.data.data,e.plotPicsArray=JSON.parse(e.trailerInfo.plotPics))}}),uni.request({url:this.$common.serverUrl+"/search/staff/"+i+"/1?"+this.$common.qqId,method:"POST",success:function(t){200==t.data.status&&(e.directorArray=t.data.data)}}),uni.request({url:this.$common.serverUrl+"/search/staff/"+i+"/2?"+this.$common.qqId,method:"POST",success:function(t){200==t.data.status&&(e.actorArray=t.data.data,console.log(e.actorArray))}})},onReady:function(){uni.hideLoading(),this.videoContext=uni.createVideoContext("myVideo")},onHide:function(){this.videoContext.pause()},onShow:function(){},onShareAppMessage:function(t){return{title:"this.trailerInfo.name",path:"/pages/movie/movie?trailerId="+this.trailerInfo.id}},onNavigationBarButtonTap:function(t){var e=this.trailerInfo,i=e.id,a=e.name,o=e.cover;e.poster;0==t.index&&uni.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://192.168.1.8:8080/#/pages/movie/movie?trailerId="+i,title:"NEXT超英预告：《"+a+"》",summary:"NEXT超英预告：《"+a+"》",imageUrl:o,success:function(t){console.log("success:"+JSON.stringify(t))}})}};e.default=r},"7c6c":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"player"},[i("v-uni-video",{staticClass:"movie-video",attrs:{id:"myVideo",src:t.trailerInfo.trailer,poster:t.trailerInfo.poster,controls:""}})],1),i("v-uni-view",{staticClass:"movie-info"},[i("v-uni-navigator",{attrs:{url:"../cover/cover?cover="+t.trailerInfo.cover}},[i("v-uni-image",{staticClass:"cover",attrs:{src:t.trailerInfo.cover}})],1),i("v-uni-view",{staticClass:"movie-desc"},[i("v-uni-view",{staticClass:"movie-desc-tit"},[t._v(t._s(t.trailerInfo.name))]),i("v-uni-view",{staticClass:"basic-info"},[t._v(t._s(t.trailerInfo.basicInfo))]),i("v-uni-view",{staticClass:"basic-info"},[t._v(t._s(t.trailerInfo.originalName))]),i("v-uni-view",{staticClass:"basic-info"},[t._v(t._s(t.trailerInfo.totalTime))]),i("v-uni-view",{staticClass:"basic-info"},[t._v(t._s(t.trailerInfo.releaseDate))]),i("v-uni-view",{staticClass:"score-block"},[i("v-uni-view",{staticClass:"big-score"},[i("v-uni-view",{staticClass:"score-words"},[t._v("综合评分")]),i("v-uni-view",{staticClass:"movie-score-big"},[t._v(t._s(t.trailerInfo.score))])],1),i("v-uni-view",{staticClass:"score-stars"},[t.trailerInfo.score>=0?[i("scorestar",{attrs:{innerScore:t.trailerInfo.score,showNum:"0"}})]:t._e(),i("v-uni-view",{staticClass:"prise-counts"},[t._v(t._s(t.trailerInfo.prisedCounts)+"人点赞")])],2)],1)],1)],1),i("v-uni-view",{staticClass:"line-wapper"},[i("v-uni-view",{staticClass:"line"})],1),i("v-uni-view",{staticClass:"plots-block"},[i("v-uni-view",{staticClass:"plots-title"},[t._v("剧情介绍")]),i("v-uni-view",{staticClass:"plots-desc"},[t._v(t._s(t.trailerInfo.plotDesc))])],1),i("v-uni-view",{staticClass:"scroll-block"},[i("v-uni-view",{staticClass:"plots-title"},[t._v("演职人员")]),i("v-uni-scroll-view",{staticClass:"scroll-list",attrs:{"scroll-x":""}},[t._l(t.directorArray,function(e,a){return i("v-uni-view",{key:e.staffId,staticClass:"actor-waaper"},[i("v-uni-image",{staticClass:"actor-image",attrs:{src:e.photo,mode:"aspectFill","data-staffIndex":a},on:{click:function(e){e=t.$handleEvent(e),t.lookStaffs(e)}}}),i("v-uni-view",{staticClass:"actor-name title-1"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"actor-role title-1"},[t._v(t._s(e.actName))])],1)}),t._l(t.actorArray,function(e,a){return i("v-uni-view",{key:e.staffId,staticClass:"actor-waaper"},[i("v-uni-image",{staticClass:"actor-image",attrs:{src:e.photo,mode:"aspectFill","data-staffIndex":a+t.directorArray.length},on:{click:function(e){e=t.$handleEvent(e),t.lookStaffs(e)}}}),i("v-uni-view",{staticClass:"actor-name title-1"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"actor-role title-1"},[t._v(t._s(e.actName))])],1)})],2)],1),i("v-uni-view",{staticClass:"scroll-block"},[i("v-uni-view",{staticClass:"plots-title"},[t._v("剧照")]),i("v-uni-scroll-view",{staticClass:"scroll-list",attrs:{"scroll-x":""}},t._l(t.plotPicsArray,function(e,a){return i("v-uni-image",{key:e.staffId,staticClass:"actor-image",attrs:{src:e,mode:"aspectFill","data-imgIndex":a},on:{click:function(e){e=t.$handleEvent(e),t.lookMe(e)}}})}),1)],1)],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},"7d85":function(t,e,i){"use strict";var a=i("bd4c"),o=i.n(a);o.a},"82cc":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".player[data-v-2f2fc774]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#000}.movie-video[data-v-2f2fc774]{width:100%;height:%?440?%}.movie-info[data-v-2f2fc774]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background:#f7f4f9;padding:%?40?% %?20?%}.cover[data-v-2f2fc774]{width:%?280?%;height:%?380?%}.movie-desc[data-v-2f2fc774]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:%?38?%}.movie-desc-tit[data-v-2f2fc774]{font-size:24px;padding-bottom:10px}.basic-info[data-v-2f2fc774]{color:grey;font-size:13px;line-height:%?36?%;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.score-block[data-v-2f2fc774]{background:#fbfbfb;margin-top:%?20?%;width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:%?20?%;-webkit-box-shadow:0 5px 12px rgba(0,0,0,.05);box-shadow:0 5px 12px rgba(0,0,0,.05);border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box}.big-score[data-v-2f2fc774]{padding-right:%?30?%;text-align:center}.score-words[data-v-2f2fc774]{font-size:12px;color:grey}.movie-score-big[data-v-2f2fc774]{font-size:26px;font-weight:700;color:#feab2a;line-height:%?60?%;padding:%?10?% 0}.prise-counts[data-v-2f2fc774]{font-size:12px;color:grey;line-height:%?44?%;padding:%?10?% 0}.plots-block[data-v-2f2fc774]{background-color:#f7f4f9;padding:%?20?%}.plots-title[data-v-2f2fc774]{color:#565656;font-size:14px}.plots-desc[data-v-2f2fc774]{margin-top:10px;font-size:12px}.scroll-block[data-v-2f2fc774]{background-color:#f7f4f9;padding:%?20?%}.scroll-list[data-v-2f2fc774]{width:100%;white-space:nowrap;margin-top:%?20?%}.plot-image[data-v-2f2fc774]{width:%?220?%;height:%?320?%;margin-right:%?10?%}.actor-image[data-v-2f2fc774]{width:%?170?%;height:%?240?%;margin-right:%?10?%}.actor-waaper[data-v-2f2fc774]{display:inline-block}.actor-name[data-v-2f2fc774]{width:%?170?%;text-align:left;font-size:14px;padding-bottom:%?5?%}.actor-role[data-v-2f2fc774]{width:%?170?%;text-align:left;font-size:12px;color:#aaa}",""])},"869c":function(t,e,i){"use strict";i.r(e);var a=i("ef7c"),o=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},bd4c:function(t,e,i){var a=i("82cc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("6ecfb008",a,!0,{sourceMap:!1,shadowMode:!1})},d649:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"movie-score-wapper"},[i("v-uni-view",{staticClass:"star-y"},t._l(t.yelloScore,function(t,e){return i("v-uni-image",{key:e,staticClass:"icon-star",attrs:{src:"../../static/icon_other/star-yellow.png"}})}),1),i("v-uni-view",{staticClass:"star-g"},t._l(t.grayScore,function(t,e){return i("v-uni-image",{key:e,staticClass:"icon-star",attrs:{src:"../../static/icon_other/star-gray.png"}})}),1),t.showNum?i("v-uni-view",{staticClass:"movie-score"},[t._v(t._s(t.innerScore))]):t._e()],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},eb38:function(t,e,i){"use strict";i.r(e);var a=i("d649"),o=i("869c");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("0ed6");var s=i("2877"),n=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"f50ac1e4",null);e["default"]=n.exports},ef7c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"scoreStar",data:function(){return{yelloScore:0,grayScore:5}},props:{innerScore:0,showNum:0},created:function(){null!=this.innerScore&&void 0!=this.innerScore&&""!=this.innerScore&&(this.yelloScore=parseInt(this.innerScore/2),this.grayScore=5-this.yelloScore)}};e.default=a},efbf:function(t,e,i){"use strict";i.r(e);var a=i("7c6c"),o=i("1001");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("7d85");var s=i("2877"),n=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"2f2fc774",null);e["default"]=n.exports},f7ba:function(t,e,i){var a=i("4071");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("40de36be",a,!0,{sourceMap:!1,shadowMode:!1})}}]);