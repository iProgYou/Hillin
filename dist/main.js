/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\nclass Game {\n    constructor(keysPressed) {\n        Game.DIM_X = 1000; \n        Game.DIM_Y = 500;\n        Game.MAP_EL_WIDTH = 50;\n        Game.MAP_EL_HEIGHT = 50;\n        this.groud_color = \"#000000\"\n        this.keysPressed = keysPressed;\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            pos: [20, 400],\n            color: \"#00FF00\"\n        });\n    }\n\n    // draw(ctx) {\n    //     ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)\n    //     // screen.draw or level.draw\n    //     // enamies.draw\n    //     this.player.draw(ctx)\n    // }\n\n    drawLevel(ctx,level) {\n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)\n        // screen.draw or level.draw\n        // enamies.draw\n        // level is a 2d array\n        // i = y coord, j = x coord\n        for (let i = 0; i < Game.DIM_Y / Game.MAP_EL_HEIGHT; i ++) {\n            for (let j = 0; j < Game.DIM_X / Game.MAP_EL_WIDTH; j ++) {\n                if (level[i][j] === 'g') {\n                    // ctx.fillStyle(this.groud_color)\n                    ctx.fillRect(\n                        j * Game.MAP_EL_WIDTH, \n                        i * Game.MAP_EL_HEIGHT, \n                        Game.MAP_EL_WIDTH, \n                        Game.MAP_EL_HEIGHT\n                    );\n                }\n            }\n        }\n        this.player.draw(ctx)\n    }\n\n    step(ctx) {\n        this.player.move(this.keysPressed);\n        // this.checkCollisions()\n        debugger\n        this.drawLevel(ctx,_levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0]);\n        // this.moveObjects(); \n        // this.checkCollisions();\n\n        // player topleft\n        // player bottomright\n\n        // entity topleft\n        // entity bottomright\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView { \n    constructor(ctx,game) {\n        this.game = game; \n        this.ctx = ctx; \n    }\n\n    start() { \n        setInterval(() => {this.game.step(this.ctx)}, 20); \n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// const MovingObject = require(\"./moving_object\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const elCanvas = document.getElementById(\"game-canvas\");\n    elCanvas.height = 500;\n    elCanvas.width = 1000;\n\n    let keysPressed = {};\n    document.addEventListener(\"keydown\", (e) => {\n        keysPressed[e.key] = true;\n    }, false);\n    document.addEventListener(\"keyup\", (e) => {\n        keysPressed[e.key] = false;\n    }, false);\n    \n    const ctx = elCanvas.getContext(\"2d\");\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](keysPressed);\n    const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx,game);\n    gameView.start();\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Levels = {\n    0: [\n        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], \n        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], \n        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], \n        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], \n        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], \n        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], \n        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], \n        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], \n        ['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g'], \n    ]\n}\n\n// module.exports = levels;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Levels);\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(playerData) {\n        this.pos = playerData[\"pos\"];\n        this.isJumping = false;\n        this.accel = [0,0];\n        this.velocity = [0,0];\n        this.maxVelocity = 100;\n        console.log(this.maxVelocity)\n        this.friction = 0.2;\n        // this.height = playerData[\"height\"];\n        // this.width = playerData[\"width\"];\n        this.color = playerData[\"color\"];\n    }\n\n    draw(ctx) {\n        ctx.beginPath();\n        ctx.rect(...this.pos,20,40);\n        ctx.stroke();\n    }\n\n    move(keysPressed) {\n        if (keysPressed['d']) {\n            this.pos[0] += 7;\n        }\n        if (keysPressed['a']) {\n            this.pos[0] -= 7;\n        }\n        if (keysPressed['w']) {\n            if (!this.isJumping) {\n                this.jump()\n            }\n        }\n        // if (keysPressed['d']) {\n        //     this.accel[0] = 1;\n        // }\n        // if (keysPressed['a']) {\n        //     this.accel[0] = -1;\n        // }\n        // if (keysPressed['w']) {\n        //     if (!this.isJumping) {\n        //         this.jump()\n        //     }\n        // }\n        // this.velocity[0] += this.accel[0]\n        // if(this.velocity[0] > this.maxVelocity){\n        //     this.velocity[0] = this.maxVelocity;\n        // } else if(this.velocity[0] < -this.maxVelocity) {\n        //     this.velocity[0] = -this.maxVelocity;\n        // }\n\n        // this.velocity[1] += this.accel[1]\n\n        // this.pos[0] += this.velocity[0]\n        // this.pos[1] += this.velocity[1]\n    }\n\n    checkCollision() {\n\n    }\n\n    jump() {\n\n        this.isJumping = false;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });