/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src-electron/electron-preload.js":
/*!******************************************!*\
  !*** ./src-electron/electron-preload.js ***!
  \******************************************/
/***/ (() => {

eval("/**\n * This file is used specifically for security reasons.\n * Here you can access Nodejs stuff and inject functionality into\n * the renderer thread (accessible there through the \"window\" object)\n *\n * WARNING!\n * If you import anything from node_modules, then make sure that the package is specified\n * in package.json > dependencies and NOT in devDependencies\n *\n * Example (injects window.myAPI.doAThing() into renderer thread):\n *\n *   import { contextBridge } from 'electron'\n *\n *   contextBridge.exposeInMainWorld('myAPI', {\n *     doAThing: () => {}\n *   })\n *\n * WARNING!\n * If accessing Node functionality (like importing @electron/remote) then in your\n * electron-main.js you will need to set the following when you instantiate BrowserWindow:\n *\n * mainWindow = new BrowserWindow({\n *   // ...\n *   webPreferences: {\n *     // ...\n *     sandbox: false // <-- to be able to import @electron/remote in preload script\n *   }\n * }\n */\n\n//# sourceURL=webpack://pharmaplus/./src-electron/electron-preload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src-electron/electron-preload.js"]();
/******/ 	
/******/ })()
;