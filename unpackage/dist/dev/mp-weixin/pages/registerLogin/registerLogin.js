(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/registerLogin/registerLogin"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/movie-app/uni-app-movie/pages/registerLogin/registerLogin.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {};


  },
  methods: {
    appOAuthLogin: function appOAuthLogin(e) {
      var serverUrl = this.$common.serverUrl;
      var qqID = this.$common.qqId;
      // 获取用户的登录类型
      var logintype = e.currentTarget.dataset.logintype;
      // 授权登录
      uni.login({
        provider: logintype,
        success: function success(loginres) {
          // 授权登录登录成功后,获取用户信息
          uni.getUserInfo({
            provider: logintype,
            success: function success(info) {
              // console.log(JSON.stringify(info))
              var userInfo = info.userInfo;
              var face = "";
              var nickname = "";
              var openIdOrUid = "";
              if (logintype == "weixin") {
                face = userInfo.avatarUrl;
                nickname = userInfo.nickName;
                openIdOrUid = userInfo.openId;
              } else if (logintype == "qq") {
                face = userInfo.figureurl_qq_2;
                nickname = userInfo.nickname;
                openIdOrUid = userInfo.openid;
              } else if (logintype == "sinaweibo") {
                face = userInfo.avatar_large;
                nickname = userInfo.nickname;
                openIdOrUid = userInfo.id;
              }
              // 调用开发者后台,执行一键注册或登录
              uni.request({
                url: serverUrl + '/appUnionLogin/' + logintype + '?' + qqID,
                data: {
                  "face": face,
                  "nickname": nickname,
                  "openIdOrUid": openIdOrUid },

                method: "POST",
                success: function success(result) {
                  if (result.data.status == 200) {
                    var usrInfo = result.data.data;
                    // 保存用户信息到全局缓存中
                    uni.setStorageSync('globalUser', userInfo);
                    // 切换页面跳转,使用tab切换api
                    uni.switchTab({
                      url: "../me/me" });

                  }
                } });

            } });

        } });

    },

    // 微信小程序端的微信登录
    wxLogin: function wxLogin(e) {
      // 获取微信用户信息
      var userInfo = e.detail.userInfo;
      var serverUrl = this.$common.serverUrl;
      var qqID = this.$common.qqId;
      uni.login({
        provider: "weixin",
        success: function success(result) {
          // 获得微信登录code,授权码
          var code = result.code;
          // 设置登录到哪个后端小程序，0-next超英预告，1-超英预告，2-next学院电影预告
          var loginToWhichMP = 1;
          uni.request({
            url: serverUrl + '/stu/mpWXLogin/' + code + "?" + qqID,
            data: {
              "avatarUrl": userInfo.avatarUrl,
              "nickName": userInfo.nickName,
              "whichMP": loginToWhichMP },

            method: "POST",
            success: function success(result) {
              console.log(result);
            } });

        } });

    },

    formSubmit: function formSubmit(e) {
      var username = e.detail.value.username;
      var password = e.detail.value.password;
      // 登录注册请求
      uni.request({
        url: this.$common.serverUrl + '/user/registOrLogin?' + this.$common.qqId,
        data: {
          "username": username,
          "password": password },

        method: 'POST',
        success: function success(res) {
          if (res.data.status == 200) {
            var userInfo = res.data.data;
            // 保存用户信息到全局缓存中
            uni.setStorageSync("globalUser", userInfo);
            // 登录成功后,使用tab切换api
            uni.switchTab({
              url: "../me/me" });

          } else
          if (res.data.status == 500) {
            uni.showToast({
              title: res.data.msg,
              duration: 2000,
              image: '../../static/icon_other/error.png' });

          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/movie-app/uni-app-movie/pages/registerLogin/registerLogin.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=template&id=0386ffb9&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/movie-app/uni-app-movie/pages/registerLogin/registerLogin.vue?vue&type=template&id=0386ffb9& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue":
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/movie-app/uni-app-movie/pages/registerLogin/registerLogin.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registerLogin_vue_vue_type_template_id_0386ffb9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerLogin.vue?vue&type=template&id=0386ffb9& */ "C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=template&id=0386ffb9&");
/* harmony import */ var _registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerLogin.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _registerLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerLogin.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registerLogin_vue_vue_type_template_id_0386ffb9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registerLogin_vue_vue_type_template_id_0386ffb9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/movie-app/uni-app-movie/pages/registerLogin/registerLogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/movie-app/uni-app-movie/pages/registerLogin/registerLogin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./registerLogin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=script&lang=js&");
/* harmony import */ var _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/movie-app/uni-app-movie/pages/registerLogin/registerLogin.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./registerLogin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=template&id=0386ffb9&":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/movie-app/uni-app-movie/pages/registerLogin/registerLogin.vue?vue&type=template&id=0386ffb9& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_template_id_0386ffb9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./registerLogin.vue?vue&type=template&id=0386ffb9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\pages\\registerLogin\\registerLogin.vue?vue&type=template&id=0386ffb9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_template_id_0386ffb9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_J_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_registerLogin_vue_vue_type_template_id_0386ffb9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator\\Desktop\\movie-app\\uni-app-movie\\main.js?{\"page\":\"pages%2FregisterLogin%2FregisterLogin\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/registerLogin/registerLogin.js.map