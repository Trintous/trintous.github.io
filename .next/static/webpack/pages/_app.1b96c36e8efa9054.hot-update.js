"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const prefersDarkMode = window.matchMedia && window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n        setIsDarkMode(prefersDarkMode);\n    }, []);\n    const themeClasses = isDarkMode ? {\n        background: \"#424549\",\n        text: \"#fff\"\n    } : {\n        bakcground: \"#F2F2F2\",\n        text: \"\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b2d1fe4731f09159\",\n                                [\n                                    themeClasses.background\n                                ]\n                            ]\n                        ]),\n                        children: \"tony's site\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/images/meliodasexpressionless.png\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b2d1fe4731f09159\",\n                                [\n                                    themeClasses.background\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"tony\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b2d1fe4731f09159\",\n                                [\n                                    themeClasses.background\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b2d1fe4731f09159\",\n                                [\n                                    themeClasses.background\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"/images/meliodaschibi.png\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b2d1fe4731f09159\",\n                                [\n                                    themeClasses.background\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"my personal website\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b2d1fe4731f09159\",\n                                [\n                                    themeClasses.background\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#5865F2\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b2d1fe4731f09159\",\n                                [\n                                    themeClasses.background\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:card\",\n                        content: \"summary_large_image\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b2d1fe4731f09159\",\n                                [\n                                    themeClasses.background\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b2d1fe4731f09159\",\n                dynamic: [\n                    themeClasses.background\n                ],\n                children: \"body{background:\".concat(themeClasses.background, \"}\")\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"b2d1fe4731f09159\",\n                        [\n                            themeClasses.background\n                        ]\n                    ]\n                ]) + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n            }, void 0, false, {\n                fileName: \"/Users/tony/Documents/mywebsite/src/pages/_app.tsx\",\n                lineNumber: 37,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"bUs4CHDjU8AH+ZZYt8wlh4bHppI=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFFRDtBQUVnQjtBQUU3QixTQUFTRyxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7O0lBQzFCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWxERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTU8sa0JBQWtCQyxPQUFPQyxVQUFVLElBQUlELE9BQU9DLFVBQVUsQ0FBQyxnQ0FBZ0NDLE9BQU87UUFDdEdKLGNBQWNDO0lBQ2hCLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGVBQWVOLGFBQ2pCO1FBQUVPLFlBQVk7UUFBV0MsTUFBTTtJQUFPLElBQ3RDO1FBQUVDLFlBQVk7UUFBV0QsTUFBTTtJQUFFLENBQUM7SUFDdEMscUJBQ0U7OzBCQUNFLDhEQUFDZCxrREFBSUE7O2tDQUNILDhEQUFDZ0I7Ozs7O29DQVlpQkosYUFBYUMsVUFBVTs7OztrQ0FabEM7Ozs7OztrQ0FDUCw4REFBQ0k7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7O29DQVdKUCxhQUFhQyxVQUFVOzs7Ozs7Ozs7a0NBVnpDLDhEQUFDTzt3QkFBS0MsVUFBUzt3QkFBV0MsU0FBUTs7Ozs7b0NBVWhCVixhQUFhQyxVQUFVOzs7Ozs7Ozs7a0NBVHpDLDhEQUFDTzt3QkFBS0MsVUFBUzt3QkFBVUMsU0FBUTs7Ozs7b0NBU2ZWLGFBQWFDLFVBQVU7Ozs7Ozs7OztrQ0FSekMsOERBQUNPO3dCQUFLQyxVQUFTO3dCQUFXQyxTQUFROzs7OztvQ0FRaEJWLGFBQWFDLFVBQVU7Ozs7Ozs7OztrQ0FQekMsOERBQUNPO3dCQUFLQyxVQUFTO3dCQUFpQkMsU0FBUTs7Ozs7b0NBT3RCVixhQUFhQyxVQUFVOzs7Ozs7Ozs7a0NBTnpDLDhEQUFDTzt3QkFBS0csTUFBSzt3QkFBY0QsU0FBUTs7Ozs7b0NBTWZWLGFBQWFDLFVBQVU7Ozs7Ozs7OztrQ0FMekMsOERBQUNPO3dCQUFLRyxNQUFLO3dCQUFlRCxTQUFROzs7OztvQ0FLaEJWLGFBQWFDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBdkJELGFBQWFDLFVBQVU7O29EQUF2QkQsYUFBYUMsVUFBVTs7MEJBSTVDLDhEQUFDVDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs0QkFKSE8sYUFBYUMsVUFBVTs7OzRCQUk3QlIsYUFBQUEsK0JBQUFBOzs7Ozs7OztBQUdwQixDQUFDO0dBakN1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNZWxpb2Rhc0NoaWJpIGZyb20gJy4uLy4uL3B1YmxpYy9tZWxpb2Rhc2NoaWJpLnBuZydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByZWZlcnNEYXJrTW9kZSA9IHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBzZXRJc0RhcmtNb2RlKHByZWZlcnNEYXJrTW9kZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0aGVtZUNsYXNzZXMgPSBpc0RhcmtNb2RlXG4gICAgPyB7IGJhY2tncm91bmQ6IFwiIzQyNDU0OVwiLCB0ZXh0OiBcIiNmZmZcIiB9XG4gICAgOiB7IGJha2Nncm91bmQ6IFwiI0YyRjJGMlwiLCB0ZXh0OiBcIlwifVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnRvbnkncyBzaXRlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL21lbGlvZGFzZXhwcmVzc2lvbmxlc3MucG5nXCIvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cInRvbnlcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL2ltYWdlcy9tZWxpb2Rhc2NoaWJpLnBuZ1wiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJteSBwZXJzb25hbCB3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM1ODY1RjJcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIj48L21ldGE+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57XG4gICAgICAgIGBcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVDbGFzc2VzLmJhY2tncm91bmR9XG4gICAgICAgICAgfVxuICAgICAgICBgXG4gICAgICB9PC9zdHlsZT5cbiAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJwcmVmZXJzRGFya01vZGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lQ2xhc3NlcyIsImJhY2tncm91bmQiLCJ0ZXh0IiwiYmFrY2dyb3VuZCIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtZXRhIiwicHJvcGVydHkiLCJjb250ZW50IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});