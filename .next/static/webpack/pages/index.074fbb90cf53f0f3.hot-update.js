"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/util/styles/index.ts":
/*!**********************************!*\
  !*** ./src/util/styles/index.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlobDiv\": function() { return /* binding */ BlobDiv; },\n/* harmony export */   \"BlobG1\": function() { return /* binding */ BlobG1; },\n/* harmony export */   \"BlobG2\": function() { return /* binding */ BlobG2; },\n/* harmony export */   \"BlobSection\": function() { return /* binding */ BlobSection; },\n/* harmony export */   \"Name\": function() { return /* binding */ Name; },\n/* harmony export */   \"NameHeader\": function() { return /* binding */ NameHeader; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: fixed;\\n    bottom: 0;\\n    left: 0;\\n    width: 100%;\\n    z-index: -999;\\n    display: flex;\\n    justify-content: center;\\n    min-height: 100vh;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    filter: blur(5px);\\n    width: 200px;\\n    height: 20vh;\\n    left: 0;\\n    top: 0;\\n    transform: scale(2.5);\\n    transform-style: preserve-3d;\\n\\n    @media (max-width: 600px) {\\n        transform: scale(2);\\n        transition: transform 0.5s ease-in-out;\\n\\n    }\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    stop-color: rgb(76, 161, 175);\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    stop-color: rgb(196, 224, 229)\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    font-size: 2vmin;\\n    font-family: JetBrains Mono, monospace;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst BlobSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n    displayName: \"styles__BlobSection\",\n    componentId: \"sc-33eb861f-0\"\n})(_templateObject());\nconst BlobDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__BlobDiv\",\n    componentId: \"sc-33eb861f-1\"\n})(_templateObject1());\nconst BlobG1 = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stop.withConfig({\n    displayName: \"styles__BlobG1\",\n    componentId: \"sc-33eb861f-2\"\n})(_templateObject2());\nconst BlobG2 = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stop.withConfig({\n    displayName: \"styles__BlobG2\",\n    componentId: \"sc-33eb861f-3\"\n})(_templateObject3());\nconst NameHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__NameHeader\",\n    componentId: \"sc-33eb861f-4\"\n})(_templateObject4());\nconst Name = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n    displayName: \"styles__Name\",\n    componentId: \"sc-33eb861f-5\"\n})(_templateObject5());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9zdHlsZXMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLGNBQWNELDRFQUFjOzs7c0JBU3hDO0FBRU0sTUFBTUcsVUFBVUgsd0VBQVU7Ozt1QkFnQmhDO0FBQ00sTUFBTUssU0FBU0wseUVBQVc7Ozt1QkFFaEM7QUFFTSxNQUFNTyxTQUFTUCx5RUFBVzs7O3VCQUVoQztBQUVNLE1BQU1RLGFBQWFSLHdFQUFVOzs7dUJBR25DO0FBRU0sTUFBTVMsT0FBT1QsdUVBQVM7Ozt1QkFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbC9zdHlsZXMvaW5kZXgudHM/ZjI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEJsb2JTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC05OTk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbmBcblxuZXhwb3J0IGNvbnN0IEJsb2JEaXYgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xuXG4gICAgfVxuXG5gXG5leHBvcnQgY29uc3QgQmxvYkcxID0gc3R5bGVkLnN0b3BgXG4gICAgc3RvcC1jb2xvcjogcmdiKDc2LCAxNjEsIDE3NSk7XG5gXG5cbmV4cG9ydCBjb25zdCBCbG9iRzIgPSBzdHlsZWQuc3RvcGBcbiAgICBzdG9wLWNvbG9yOiByZ2IoMTk2LCAyMjQsIDIyOSlcbmBcblxuZXhwb3J0IGNvbnN0IE5hbWVIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICAgIGZvbnQtc2l6ZTogMnZtaW47XG4gICAgZm9udC1mYW1pbHk6IEpldEJyYWlucyBNb25vLCBtb25vc3BhY2U7XG5gXG5cbmV4cG9ydCBjb25zdCBOYW1lID0gc3R5bGVkLmgxYGAiXSwibmFtZXMiOlsic3R5bGVkIiwiQmxvYlNlY3Rpb24iLCJzZWN0aW9uIiwiQmxvYkRpdiIsImRpdiIsIkJsb2JHMSIsInN0b3AiLCJCbG9iRzIiLCJOYW1lSGVhZGVyIiwiTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/styles/index.ts\n"));

/***/ })

});