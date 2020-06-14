(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../../../node_modules/babel-loader/lib/index.js?!../../../node_modules/vue-loader/lib/index.js?!./src/views/product/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** D:/0_web_study/node_modules/babel-loader/lib??ref--0-0!D:/0_web_study/node_modules/vue-loader/lib??vue-loader-options!./src/views/product/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_product_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @v/product/Create */ \"./src/views/product/Create.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mixins: [_v_product_Create__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    // 重写数据的位置一\n    data: function data() {\n      return {\n        title: '编辑商品',\n        msg: '修改成功',\n        submitUrl: ''\n      };\n    }\n  }],\n  // 重写数据的位置二\n  // data(){\n  //         return{\n  //             title:'编辑商品'\n  //         }\n  //     }\n  methods: {\n    getData: function getData() {\n      var _this = this;\n\n      var params = this.$route.params;\n      this.$http.get('/admin/product/detail', {\n        params: params\n      }).then(function (_ref) {\n        var data = _ref.data;\n        console.log(data);\n\n        if (data.errno === 0) {\n          // console.log(222)\n          _this.data = data.data; // 提交时 需要删除当前图片\n\n          _this.submitUrl = '/admin/product/edit?' + 'img=' + data.data.img;\n          return;\n        }\n\n        _this.$message.error(data.msg);\n\n        console.log(_this.$router);\n\n        _this.$router.back(); //返回上一个页面\n\n      });\n    }\n  },\n  created: function created() {\n    this.getData();\n    console.log(this.$route.params.id);\n  },\n  watch: {\n    $route: function $route() {// this.getData()\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/product/Edit.vue?D:/0_web_study/node_modules/babel-loader/lib??ref--0-0!D:/0_web_study/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/product/Edit.vue":
/*!************************************!*\
  !*** ./src/views/product/Edit.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ \"./src/views/product/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/product/Edit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/product/Edit.vue?");

/***/ }),

/***/ "./src/views/product/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/product/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ \"../../../node_modules/babel-loader/lib/index.js?!../../../node_modules/vue-loader/lib/index.js?!./src/views/product/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/product/Edit.vue?");

/***/ })

}]);