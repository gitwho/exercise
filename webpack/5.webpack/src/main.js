 (function(modules) { // webpackBootstrap
   // install a JSONP callback for chunk loading
  //  安装jsonp callback 为了实现代码块的加载
 	function webpackJsonpCallback(data) {
    //  data = [[0], {'./src/use.js': 函数}]
 		var chunkIds = data[0];  //[0]
 		var moreModules = data[1]; // 更多的模块 {'./src/use.js': 函数}


 		// add "moreModules" to the modules object,
     // then flag all "chunkIds" as loaded and fire callback
    //  加载更多模块
 		var moduleId, chunkId, i = 0, resolves = [];
 		for(;i < chunkIds.length; i++) {
 			chunkId = chunkIds[i];  // 0
 			if(installedChunks[chunkId]) {  // [resovle, reject, promise]
 				resolves.push(installedChunks[chunkId][0]); // resolves = [resolve]
 			}
 			installedChunks[chunkId] = 0;  // 模块加载完成； 下面 onScriptComplete 函数中 会根据这个值判断是否 加载完成
 		}
 		for(moduleId in moreModules) {
 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
 				modules[moduleId] = moreModules[moduleId];  // 将传入的参数（对象{'./src/index.js': 函数}） 添加 另一个键值对('./src/use.js': 函数)
 			}
 		}
 		if(parentJsonpFunction) parentJsonpFunction(data);  // window["webpackJsonp"] =  [[0], {'./src/use.js': 函数}]

 		while(resolves.length) {
 			resolves.shift()(); // 执行promise成功的 resolve()函数
 		}
 	};


   // The module cache
  //  模块缓存
 	var installedModules = {};

 	// object to store loaded and loading chunks
 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
   // Promise = chunk loading, 0 = chunk loaded
  //  已经安装的代码块
  // undefined：模块没加载
  // null：预加载
  // Promise：正在加载
  // 0：加载完成
 	var installedChunks = {
 		"main": 0
 	};



 	// script path function
 	function jsonpScriptSrc(chunkId) {
 		return __webpack_require__.p + "" + chunkId + ".main.js"
 	}

 	// The require function
 	function __webpack_require__(moduleId) {

 		// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
     // Create a new module (and put it into the cache)
    //  创建一个新模块，且放入缓存
 		var module = installedModules[moduleId] = {
 			i: moduleId,  // './src/index.js'
 			l: false,   // 
 			exports: {}
 		};

     // Execute the module function
    //  modules[moduleId]： 传入的对象的值，eval()函数
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}

   // This file contains only the entry chunk.
  //  默认文件只包含 入口的代码块
   // The chunk loading function for additional chunks
  //  增加 加载的函数代码块
 	__webpack_require__.e = function requireEnsure(chunkId) { // chunkId = 0
 		var promises = [];


 		// JSONP chunk loading for javascript
    // 拿到chunkId 为 0 的模块名
 		var installedChunkData = installedChunks[chunkId]; // undefined
 		if(installedChunkData !== 0) { // 0 means "already installed".

 			// a Promise means "currently loading".
 			if(installedChunkData) {
 				promises.push(installedChunkData[2]);
 			} else {
         // setup Promise in chunk cache
        //  创建promise 
 				var promise = new Promise(function(resolve, reject) {
          // installedChunks[0] = [resolve, reject]
 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
         });
        //  installedChunkData = [resolve, reject, promise]
        // promises = [promise] 
 				promises.push(installedChunkData[2] = promise);

 				// start chunk loading
 				var script = document.createElement('script'); 
 				var onScriptComplete;

 				script.charset = 'utf-8'; // 设置编码utf-8
 				script.timeout = 120;  // 设置超时时间
 				if (__webpack_require__.nc) {
 					script.setAttribute("nonce", __webpack_require__.nc);
 				}
 				script.src = jsonpScriptSrc(chunkId);  // 加载 0.main.js

 				onScriptComplete = function (event) {
           // avoid mem leaks in IE. 
            //防止内存泄漏 ie下
 					script.onerror = script.onload = null;
           clearTimeout(timeout);   //制作一个 js超时函数， 如果正常加载就取消掉
          // 没有加载： installedChunks[0] = [resolve, reject, promise]， 已加载：installedChunks[0] = 0
 					var chunk = installedChunks[chunkId];
 					if(chunk !== 0) {
 						if(chunk) {
 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
 							var realSrc = event && event.target && event.target.src;
 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
 							error.type = errorType;
 							error.request = realSrc;
 							chunk[1](error);
 						}
 						installedChunks[chunkId] = undefined;
 					}
        };
        
 				var timeout = setTimeout(function(){
 					onScriptComplete({ type: 'timeout', target: script });
         }, 120000);
         //  当标签成功 或失败 都会走这个onScriptComplete方法
 				script.onerror = script.onload = onScriptComplete;
 				document.head.appendChild(script);   // 插入script标签
 			}
 		}
 		return Promise.all(promises);
 	};

 	// expose the modules object (__webpack_modules__)
 	__webpack_require__.m = modules;

 	// expose the module cache
 	__webpack_require__.c = installedModules;

 	// define getter function for harmony exports
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};

 	// define __esModule on exports
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};

 	// create a fake namespace object
 	// mode & 1: value is a module id, require it
 	// mode & 2: merge all properties of value into the ns
 	// mode & 4: return value when already ns object
 	// mode & 8|1: behave like require
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};

 	// getDefaultExport function for compatibility with non-harmony modules
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};

 	// Object.prototype.hasOwnProperty.call
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

 	// __webpack_public_path__
 	__webpack_require__.p = "";

 	// on error function for async loading
 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

  //  
   var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
  //  
  // [].prototype.push.bind([])，this 指向 jsonpArray
   var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  
  //  重新定义 jsonpArray的push方法 
  //  window["webpackJsonp"].push = webpackJsonpCallback
   jsonpArray.push = webpackJsonpCallback;
 	jsonpArray = jsonpArray.slice();
 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
   var parentJsonpFunction = oldJsonpFunction;
  // 结果  window["webpackJsonp"].push = webpackJsonpCallback


   // Load entry module and return exports
  //  
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })

 ({
  "./src/index.js":
  (function(module, exports, __webpack_require__) {

    eval("btn.addEventListener('click', function () { __webpack_require__.e( 0).then(__webpack_require__.bind(null,\"./src/use.js\")).then(function (data) {    console.log(data.default);});});");
  })

});
// 这是一个自执行函数