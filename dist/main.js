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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n// import Tile from '../assets/Tiles/grassMid.png';\n\nclass Game {\n    constructor(keysPressed) {\n        Game.DIM_X = 1400; \n        Game.DIM_Y = 700;\n        Game.MAP_EL_WIDTH = 50;\n        Game.MAP_EL_HEIGHT = 50;\n        this.ground_color = \"#000000\"\n        this.keysPressed = keysPressed;\n        this.levelNum = 1;\n        this.level = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].level;\n        this.levelType = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].type;\n        document.getElementById(\"background-canvas\").style.backgroundImage = `url('${_levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].background}')`;\n\n        this.spriteFilenames = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"].spriteFilenames;\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                pos: _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].startPos,\n                color: \"#00FF00\"\n            },\n            Game.DIM_X\n        );\n\n    }\n\n    // draw(ctx) {\n    //     ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)\n    //     // screen.draw or level.draw\n    //     // enamies.draw\n    //     this.player.draw(ctx)\n    // }\n\n    drawLevel(ctx) {\n        // ctx.clearRect(this.posX, this.posY, this.width, this.height)\n\n\n        // debugger;\n        \n        \n\n        // screen.draw or level.draw\n        // enamies.draw\n        // level is a 2d array\n        // i = y coord, j = x coord\n        // for (let i = 0; i < Game.DIM_Y / Game.MAP_EL_HEIGHT; i ++) {\n        //     for (let j = 0; j < Game.DIM_X / Game.MAP_EL_WIDTH; j ++) {\n        for (let i = 0; i < this.level.length; i ++) {\n            for (let j = 0; j < this.level[i].length; j ++) {\n                if (this.level[i][j] != 0) {\n\n                    let platformXPos = j * Game.MAP_EL_WIDTH;\n                    let platformYPos = i * Game.MAP_EL_HEIGHT;\n                    let img = new Image();\n                    img.src = `./assets/Tiles_resized/resized_${this.levelType}${this.spriteFilenames[this.level[i][j]]}.png`;\n                    img.onload = () => {\n                        ctx.drawImage(\n                            img,\n                            platformXPos,\n                            platformYPos,\n                            img.width,\n                            img.height,\n                            // platformXPos, \n                            // platformYPos, \n                            // Game.MAP_EL_WIDTH, \n                            // Game.MAP_EL_HEIGHT\n                        )\n                    }\n                }\n            }\n        }\n    }\n\n    checkCollisions(objA,objB) {\n        return ((objA.posX < (objB.posX + objB.width)) &&\n        ((objA.posX + objA.width) > objB.posX) &&\n        (objA.posY < (objB.posY + objB.height)) &&\n        ((objA.posY + objA.height) > objB.posY)) \n    }\n    \n\n    \n    step(ctx) {\n        this.player.move(this.keysPressed);\n\n        for (let i = 0; i < Game.DIM_Y / Game.MAP_EL_HEIGHT; i ++) {\n            for (let j = 0; j < Game.DIM_X / Game.MAP_EL_WIDTH; j ++) {\n                if (this.level[i][j] != 0) {\n                    let platformXPos = j * Game.MAP_EL_WIDTH;\n                    let platformYPos = i * Game.MAP_EL_HEIGHT;\n                    let mapEl = {\n                        posX: platformXPos, \n                        posY:platformYPos, \n                        height: Game.MAP_EL_WIDTH, \n                        width: Game.MAP_EL_HEIGHT\n                    }\n                    if (this.checkCollisions(this.player,mapEl)) {\n                        this.player.resolveMapCollision(mapEl)\n                    }\n                }\n            }\n        }\n        console.log(this.player.posX,this.player.posY)\n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)\n        this.player.draw(ctx)\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView { \n    constructor(ctx,backgroundCtx,game) {\n        this.game = game; \n        this.ctx = ctx; \n        this.backgroundCtx = backgroundCtx;\n    }\n\n    start() { \n        this.game.drawLevel(this.backgroundCtx)\n        setInterval(() => {this.game.step(this.ctx)}, 20); \n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// const MovingObject = require(\"./moving_object\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const elCanvas = document.getElementById(\"game-canvas\");\n    const backgroundCanvas = document.getElementById(\"background-canvas\")\n\n    elCanvas.height = 700;\n    elCanvas.width = 1400;\n    backgroundCanvas.height = 700;\n    backgroundCanvas.width = 1400;\n\n    let keysPressed = {};\n    document.addEventListener(\"keydown\", (e) => {\n        keysPressed[e.key] = true;\n    }, false);\n    document.addEventListener(\"keyup\", (e) => {\n        keysPressed[e.key] = false;\n    }, false);\n    \n    const ctx = elCanvas.getContext(\"2d\");\n    const ctxBackground = backgroundCanvas.getContext(\"2d\");\n    window.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](keysPressed);\n    const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx,ctxBackground,game);\n    gameView.start();\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Levels = {\n    spriteFilenames: {\n        'g':    'Mid',\n        'l':    'Left',\n        'r':    'Right',\n        'c':    'Center',\n        'b':    '',\n        // 'b':    'Center_rounded'\n    },\n    0 : {\n        level: [\n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],\n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 ,'g', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            ['l','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g'], \n        ],\n        startPos: [20 ,410],\n        type: 'castle',\n        background: 'assets/resized_galaxy.jpg',\n    },\n    1: {\n        level: [\n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],\n            ['l','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 ,'b', 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','g','g','g','g','g','g','r', 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            ['l','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','r'], \n        ],\n        startPos: [ 0 ,0 ],\n        type: 'sand',\n        background: 'assets/resized_galaxy.jpg',\n    }\n}\n// types: grass, sand, dirt, snow, castle, stone\n\n// module.exports = levels;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Levels);\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(playerData, gameWidth) {\n        this.posX = playerData[\"pos\"][0];\n        this.posY = playerData[\"pos\"][1];\n        this.width = 30;\n        this.height = 57;\n        this.gravity = -5;\n        this.isJumping = false;\n        this.isGrounded = true;\n        this.facingRight = true;\n        this.walkingFrame = 1;\n        this.skipFrame = false;\n        this.maxWalkingFrame = 11;\n        this.startingJumpAcc = 16\n        // this.facingRight = false;\n        // this.isStopped = true\n        this.maxXValue = gameWidth - this.width\n        // this.isDashing = false;\n        // this.dashLength = 20;\n        // this.dashAcc = 0;\n        // this.dashDir = [0,0];\n        this.jumpAcc = -1;\n        this.jumpFrameDelay = 0;\n        this.velocityX = 0;\n        this.velocityY = 0;\n        this.isStopped = true;\n        this.maxVelocity = 100;\n        this.friction = 0.2;\n        // this.height = playerData[\"height\"];\n        // this.width = playerData[\"width\"];\n        this.color = playerData[\"color\"];\n        this.jumpingRightSprite = new Image();\n        this.jumpingRightSprite.src = `./assets/Player_sprites/p2_jump_right.png`;\n        this.jumpingLeftSprite = new Image();\n        this.jumpingLeftSprite.src = `./assets/Player_sprites/p2_jump_left.png`;\n        this.standingRightSprite = new Image();\n        this.standingRightSprite.src = `./assets/Player_sprites/p2_stand_right.png`;\n        this.standingLeftSprite = new Image();\n        this.standingLeftSprite.src = `./assets/Player_sprites/p2_stand_left.png`;\n        this.walkingRightSpriteImgs = [];\n        this.walkingLeftSpriteImgs = [];\n        for (let i = 1; i <= this.maxWalkingFrame; i++) {\n            let img = new Image();\n            img.src = `./assets/Player_sprites/walking/right/p2_walk${i}.png`;\n            let imgl = new Image();\n            imgl.src = `./assets/Player_sprites/walking/left/p2_walk${i}.png`;\n            this.walkingRightSpriteImgs.push(img)\n            this.walkingLeftSpriteImgs.push(imgl)\n        }\n    }\n\n    draw(ctx) {\n        let drawImage = this.standingRightSprite;\n        if (!this.isGrounded) {\n            if (this.facingRight) {\n                drawImage = this.jumpingRightSprite;\n            } else {\n                drawImage = this.jumpingLeftSprite;\n            }\n        } else if (this.isStopped) {\n            if (this.facingRight) {\n                drawImage = this.standingRightSprite;\n            } else {\n                drawImage = this.standingLeftSprite;\n            }\n        } else if (!this.isStopped) {\n            if (this.facingRight)  {\n                drawImage = this.walkingRightSpriteImgs[this.walkingFrame - 1];\n            } else {\n                drawImage = this.walkingLeftSpriteImgs[this.walkingFrame - 1];\n            }\n        }\n        ctx.drawImage(\n            drawImage,\n            this.posX,\n            this.posY,\n            this.width,\n            this.height,\n        )\n    }\n\n    move(keysPressed) {\n        // if (this.velocityY === 0) this.isJumping = false;\n        console.log(keysPressed)\n        this.velocityX = 0;\n        this.isStopped = true;\n        if (keysPressed['d']) {\n            this.facingRight = true;\n            this.velocityX = 7;\n        }\n        if (keysPressed['a']) {\n            this.facingRight = false;\n            this.velocityX = -7;\n        }\n        \n        if (this.velocityX != 0){\n            this.isStopped = false\n            if (this.walkingFrame < this.maxWalkingFrame) {\n                if (this.skipFrame) this.walkingFrame++;\n                this.skipFrame = !this.skipFrame;\n            } else {\n                this.walkingFrame = 1;\n            }\n            this.posX += this.velocityX;\n            if (this.posX > this.maxXValue) {\n                this.posX = this.maxXValue;\n            } else if (this.posX < 0){\n                this.posX = 0;\n            }\n        }\n\n        // Jump /////////////////////////////////////////\n        this.velocityY = -this.gravity;\n        if (keysPressed[' ']) {\n            this.isGrounded = false\n            if(!this.isJumping){\n                this.isJumping = true;\n                this.jumpAcc = this.startingJumpAcc;\n                this.jumpFrameDelay = 0;\n            }\n        }\n        if(this.jumpAcc > 0){\n            this.velocityY -= this.jumpAcc;\n            this.jumpAcc -= 1;\n        } else if (this.jumpAcc === 0) {\n            this.jumpAcc = -1;\n            // this.isJumping = false;\n        }\n        if(this.velocityY != 0){\n            this.posY += this.velocityY;\n        }\n    }\n\n\n\n    resolveMapCollision(mapEl) {\n        let dX = (this.posX + (this.width/2)) - (mapEl.posX + (mapEl.width/2));\n        let dY = (this.posY + (this.height/2)) - (mapEl.posY + (mapEl.height/2));\n        let absX = Math.abs(dX);\n        let absY = Math.abs(dY);  \n        let max_width = (mapEl.width / 2) + (this.width / 2)\n        let max_height = (mapEl.height / 2) + (this.height / 2)\n        let oX = max_width - absX;\n        let oY = max_height - absY;\n        \n        if(oX > 0 && oY > 0){\n            if(oY > oX){\n                if (dX < 0){ // object came from the left\n                    console.log(\"FROM LEFT\")\n                    this.posX -= oX;\n                } else { //if (dX > 0) object came from the right\n                    console.log(\"FROM RIGHT\")\n                    this.posX += oX;\n                }\n            } else {\n                if (dY < 0){ // object came from the top\n                    console.log(\"FROM TOP\")\n                    this.isGrounded = true;\n                    if(this.jumpFrameDelay > 10){\n                        this.isJumping = false;\n                    } else {\n                        this.jumpFrameDelay++;\n                    }\n                    this.posY -= oY;\n                }\n                else { // object came from the bottom\n\n                    console.log(\"FROM BOTTOM\")\n                    this.posY += oY;\n                }\n            } \n        }\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });