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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n// import Tile from '../assets/Tiles/grassMid.png';\n\nclass Game {\n    constructor(keysPressed) {\n        Game.DIM_X = 1400; \n        Game.DIM_Y = 700;\n        Game.MAP_EL_WIDTH = 50;\n        Game.MAP_EL_HEIGHT = 50;\n        this.loadLevel(3);\n        this.hazards = ['a']\n        this.ground_color = \"#000000\"\n        this.keysPressed = keysPressed;\n        \n        // this.hasKey = false; // UNCOMMENT THIS WHEN GOING TO PROD\n        this.hasKey = true;\n        \n        this.spriteFilenames = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"].spriteFilenames;\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            pos: _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].startPos,\n            color: \"#00FF00\"\n        }, Game.DIM_X);\n    }\n\n    drawLevel(ctx) {\n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)\n        for (let i = 0; i < this.level.length; i ++) {\n            for (let j = 0; j < this.level[i].length; j++) {\n                let currentBlock = this.level[i][j];\n                if (currentBlock != 0) {\n                    let img = new Image();\n                    let platformXPos = j * Game.MAP_EL_WIDTH;\n                    let platformYPos = i * Game.MAP_EL_HEIGHT;\n\n                    if (this.hazards.includes(currentBlock)) {\n                        img.src = `./assets/Tiles_resized/resized_liquid${this.hazardType}${this.spriteFilenames[this.level[i][j]]}.png`\n                    } else if (currentBlock === 'k') {\n                        if (!this.hasKey) {\n                            // draw key\n                            img.src = `./assets/Items/keyRed.png`\n                        } else {\n                            continue\n                        }\n                    } else if (currentBlock === 'd' || currentBlock === 'o') {\n                        let doorStatus = 'closed'\n                        let doorPiece = currentBlock === 'd' ? 'Mid' : 'Top'\n                        if (this.hasKey) {\n                            doorStatus = 'open'\n                        } \n                        img.src = `./assets/Tiles_resized/resized_door_${doorStatus}${doorPiece}.png`\n                    } else {\n                        img.src = `./assets/Tiles_resized/resized_${this.levelType}${this.spriteFilenames[this.level[i][j]]}.png`;\n                    }\n\n                    img.onload = () => {\n                        ctx.drawImage(\n                            img,\n                            platformXPos,\n                            platformYPos,\n                            img.width,\n                            img.height,\n                        )\n                    }\n                }\n            }\n        }\n    }\n\n    checkCollisions(objA,objB) {\n        return ((objA.posX < (objB.posX + objB.width)) &&\n        ((objA.posX + objA.width) > objB.posX) &&\n        (objA.posY < (objB.posY + objB.height)) &&\n        ((objA.posY + objA.height) > objB.posY)) \n    }\n    \n    resetLevel() {\n        // Reset player position\n        if (!this.player) return;\n        this.player.posX = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].startPos[0];\n        this.player.posY = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].startPos[1];\n        this.hasKey = false; // UNCOMMENT THIS WHEN GOING TO PROD\n    }\n\n    endScreen() {\n        window.gameIntervalId = null;\n        const endScreen = document.getElementById(\"endgame-screen\");\n        endScreen.style.display = '';\n        //  in index.html make an endscreen el with display none\n        //  set to display here\n        //  description of game bloob\n        //  controls\n    }\n    \n    loadLevel(levelNum) {\n        if (levelNum === 4) this.endScreen();\n        this.levelNum = levelNum;\n        this.level = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].level;\n        this.levelType = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].type;\n        this.hazardType = _levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].hazardType\n        document.getElementById(\"background-canvas\").style.backgroundImage = `url('${_levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"][this.levelNum].background}')`;\n\n        this.resetLevel()\n    }\n\n    step(ctx,backgroundCtx) {\n        this.player.move(this.keysPressed);\n\n        for (let i = 0; i < Game.DIM_Y / Game.MAP_EL_HEIGHT; i ++) {\n            for (let j = 0; j < Game.DIM_X / Game.MAP_EL_WIDTH; j ++) {\n                let currentBlock = this.level[i][j]\n                if (currentBlock != 0) {\n                    let platformXPos = j * Game.MAP_EL_WIDTH;\n                    let platformYPos = i * Game.MAP_EL_HEIGHT;\n                    let mapEl = {\n                        posX: platformXPos, \n                        posY:platformYPos, \n                        height: Game.MAP_EL_WIDTH, \n                        width: Game.MAP_EL_HEIGHT\n                    }\n                    if (this.checkCollisions(this.player,mapEl)) {\n                        if (currentBlock === 'k') {\n                            if (!this.hasKey) {\n                                this.hasKey = true;\n                                console.log(this.hasKey)\n                                this.drawLevel(backgroundCtx)\n                            }\n                        } else if (this.hazards.includes(currentBlock)) {\n                            this.resetLevel()\n                            this.drawLevel(backgroundCtx)\n                        } else if (currentBlock === 'd' || currentBlock === 'o') {\n                            if (!this.hasKey) continue;\n                            // next level\n                            this.loadLevel(this.levelNum + 1)\n                            this.drawLevel(backgroundCtx)\n                        } else {\n                            this.player.resolveMapCollision(mapEl)\n                        }\n                    }\n                }\n            }\n        }\n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)\n        this.player.draw(ctx)\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView { \n    constructor(ctx,backgroundCtx,game) {\n        this.game = game; \n        this.ctx = ctx; \n        this.backgroundCtx = backgroundCtx;\n    }\n\n    start() { \n        this.game.drawLevel(this.backgroundCtx)\n        if(window.gameIntervalId) clearInterval(window.gameIntervalId);\n        window.gameIntervalId = setInterval(() => {this.game.step(this.ctx, this.backgroundCtx)}, 20); \n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// const MovingObject = require(\"./moving_object\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const elCanvas = document.getElementById(\"game-canvas\");\n    const backgroundCanvas = document.getElementById(\"background-canvas\")\n    const musicPlayback = document.getElementById(\"music-playback\");\n    const startGameButton = document.getElementById(\"start-button\");\n    const startGameScreen = document.getElementById(\"start-game-screen\")\n    const audio = new Audio('./assets/Music/1.mp3')\n    elCanvas.height = 700;\n    elCanvas.width = 1400;\n    backgroundCanvas.height = 700;\n    backgroundCanvas.width = 1400;\n\n    let keysPressed = {};\n    document.addEventListener(\"keydown\", (e) => {\n        keysPressed[e.key] = true;\n    }, false);\n    document.addEventListener(\"keyup\", (e) => {\n        keysPressed[e.key] = false;\n    }, false);\n\n\n    musicPlayback.addEventListener(\"click\", (e) => {\n        if (window.musicDisabled){\n            audio.pause()\n        } else {\n            audio.play()\n        }\n        window.musicDisabled = !window.musicDisabled;\n    })\n\n    //play the music\n    audio.play()\n    \n    \n    const ctx = elCanvas.getContext(\"2d\");\n    const ctxBackground = backgroundCanvas.getContext(\"2d\");\n\n    startGameButton.addEventListener(\"click\", (e) => {\n        keysPressed = {};\n        window.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](keysPressed);\n        const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx,ctxBackground,game);\n        gameView.start();\n        startGameScreen.style.display = \"none\"\n    })\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Levels = {\n    spriteFilenames: {\n        'g':    'Mid', // pointy edges with squiggly\n        'l':    'Left', // rounded left side with squiggly\n        'r':    'Right', // rounded right side with squiggly\n        'c':    'Center_rounded', // rounded with squiggly\n        'b':    '', // rounded with squiggly\n        'i':    'Center', // pointed edgges no squiggly\n        'v':    'CliffLeftAlt', // left inner cliff curve\n        'u':    'CliffRightAlt', // right inner cliff curve\n        'p':    'CliffLeft', // left outer cliff curve\n        't':    'CliffRight', // right outer cliff curve\n        // 'd':    ''\n        // hazrds below ///////////////\n        'a':    '', // pointy lava\n        // 't':    'Top_mid'\n        // 'b':    'Center_rounded'\n    },\n    0 : {\n        level: [\n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],\n            [ 0 , 0 ,'l','g','g','g','g','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            ['b', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'p','t', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'v','g','u', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'c', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            ['b', 0 , 0 , 0 , 0 , 0 , 0 ,'p','g','g','g','g','t', 0 , 0 , 0 , 0 ,'c', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 ,'p','g','g','t', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 ,'c', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'o'], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'d'], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'v','g','g'], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','g','t', 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 ,'c', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','r', 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 ,'l','a','a','a','a','a','r', 0 , 0 ,'l','g','g','g','r','k', 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            ['l','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','a','a','a','a','a','a','a','a','a','a'], \n        ],\n        startPos: [20 ,600], // actual start pos\n        // startPos: [857,143], // testing starting pos\n        type: 'sand',\n        background: 'assets/Backgrounds/desert.jpg',\n        hazardType: 'Lava'\n    },\n    1: {\n        level: [\n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b','k', 0 , 0 , 0 , 0 ],\n            ['l','g','a','a','a','g','g','a','a','a','g','g','g','g','g','g','r', 0 , 0 , 0 , 0 , 0 ,'v','g','u', 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','a','a','a','r', 0 , 0 ,'i', 0 ,'b', 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','g','r', 0 , 0 ,'i', 0 , 0 , 0 ,'b'], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'b', 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','r', 0 , 0 , 0 , 0 ], \n            [ 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'p','t', 0 , 0 ,'l','i','i','i','r', 0 , 0 , 0 ], \n            [ 0 ,'l','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','i','i','i', 0 , 0 , 0 , 0 ,'b'], \n            [ 0 ,'p','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','r','i','i', 0 , 0 , 0 ,'b', 0 ], \n            [ 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'i','i','r', 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'i','i','i','r', 0 ,'o', 0 ], \n            [ 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'d','b'], \n            ['l','g','g','g','g','g','g','g','a','a','a','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','r'], \n        ],\n        startPos: [ 0 ,0 ],\n        // startPos: [ 792 ,43 ],\n        type: 'grass',\n        background: 'assets/Backgrounds/grass.jpg',\n        hazardType: 'Water'\n\n    },\n    2 : {\n        level: [\n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],\n            [ 0 , 0 ,'l','g','g','t', 0 , 0 , 0 ,'l','r', 0 , 0 , 0 , 0 , 0 ,'l','g','g','g','g','g','r', 0 , 0 , 0 , 0 , 0 ], \n            ['b', 0 , 0 , 0 ,'l','a','a','a','a','g','g','g','g','a','a','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','r', 0 ], \n            [ 0 ,'b', 0 , 0 ,'l','g','g','g','g','r', 0 , 0 ,'p','g','g','t', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'i', 0 , 0 ], \n            [ 0 , 0 , 0 ,'l','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','r', 0 , 0 , 0 , 0 ,'i', 0 ,'l'], \n            [ 0 , 0 ,'l','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','g','g','r', 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'i', 0 , 0 ], \n            ['p','t', 0 , 0 , 0 , 0 , 0 ,'l','g','g','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','i', 0 , 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 ,'l','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','i','i','r', 0 ], \n            [ 0 , 0 , 0 ,'o', 0 ,'l','r', 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 ,'l','i','i','i', 0 , 0 ], \n            [ 0 , 0 , 0 ,'d','b','k', 0 , 0 ,'l','g','g','a','a','a','a','a','r', 0 , 0 , 0 , 0 ,'l','i','i','i','i', 0 , 0 ], \n            [ 0 , 0 ,'v','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','u', 0 ,'l'], \n            ['b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            ['l','g','g','g','g','g','a','g','g','g','g','a','g','g','g','g','a','g','g','g','g','a','g','g','g','g','g','g'], \n        ],\n        startPos: [20 ,210], // actual pos\n        // startPos: [1070 ,393],// starting pos\n        type: 'stone',\n        background: 'assets/Backgrounds/rock.jpg',\n        hazardType: 'Water'\n    },\n    3 : {\n        level: [\n            [ 0 , 0 , 0 ,'a', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 ],\n            [ 0 , 0 , 0 ,'a', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 ,'l','g','g','g','r', 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 ], \n            ['p','t', 0 ,'a', 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 ,'i', 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 , 0 , 0 ,'a', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 ,'i', 0 , 0 ,'l','r', 0 , 0 , 0 , 0 , 0 , 0 ], \n            [ 0 ,'p','t','a', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 ,'i', 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'p','r', 0 ], \n            [ 0 , 0 , 0 ,'a', 0 , 0 ,'l','g','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b','i', 0 , 0 , 0 ,'l','r', 0 , 0 , 0 ,'b', 0 ], \n            ['p','t', 0 ,'a','b', 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'b', 0 ,'i', 0 ,'b', 0 ,'l','g','r', 0 , 0 ,'b', 0 ], \n            [ 0 , 0 , 0 ,'l','g','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'i', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'p','r', 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'i', 0 , 0 , 0 , 0 , 0 , 0 ,'p','g','r', 0 ], \n            ['p','g','g','g','t', 0 , 0 ,'l','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'i', 0 , 0 ,'b', 0 , 0 ,'p','g','g','r', 0 ], \n            [ 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','a','a','a','a','a','a','a','a','i','a','a','a','a','a','a','a','a','r', 0 ], \n            [ 0 , 0 ,'p','g','g','g','r','o','l','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','r', 0 ], \n            ['b', 0 , 0 , 0 ,'k', 0 ,'b','d', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], \n            ['l','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','r'], \n        ],\n        // startPos: [0, 0],\n        startPos: [443, 593],\n        type: 'snow',\n        background: 'assets/Backgrounds/snow.jpg',\n        hazardType: 'Water'\n    },\n}\n// types: grass, snow, sand, dirt, stone\n\n// module.exports = levels;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Levels);\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(playerData, gameWidth) {\n        this.posX = playerData[\"pos\"][0];\n        this.posY = playerData[\"pos\"][1];\n        this.width = 30;\n        this.height = 57;\n        this.gravity = -5;\n        this.isJumping = false;\n        this.isGrounded = true;\n        this.facingRight = true;\n        this.walkingFrame = 1;\n        this.skipFrame = false;\n        this.maxWalkingFrame = 11;\n        this.startingJumpAcc = 16\n        // this.facingRight = false;\n        // this.isStopped = true\n        this.maxXValue = gameWidth - this.width\n        // this.isDashing = false;\n        // this.dashLength = 20;\n        // this.dashAcc = 0;\n        // this.dashDir = [0,0];\n        this.jumpAcc = -1;\n        this.jumpFrameDelay = 0;\n        this.velocityX = 0;\n        this.velocityY = 0;\n        this.isStopped = true;\n        this.maxVelocity = 100;\n        this.friction = 0.2;\n        // this.height = playerData[\"height\"];\n        // this.width = playerData[\"width\"];\n        this.color = playerData[\"color\"];\n        this.jumpingRightSprite = new Image();\n        this.jumpingRightSprite.src = `./assets/Player_sprites/p2_jump_right.png`;\n        this.jumpingLeftSprite = new Image();\n        this.jumpingLeftSprite.src = `./assets/Player_sprites/p2_jump_left.png`;\n        this.standingRightSprite = new Image();\n        this.standingRightSprite.src = `./assets/Player_sprites/p2_stand_right.png`;\n        this.standingLeftSprite = new Image();\n        this.standingLeftSprite.src = `./assets/Player_sprites/p2_stand_left.png`;\n        this.walkingRightSpriteImgs = [];\n        this.walkingLeftSpriteImgs = [];\n        for (let i = 1; i <= this.maxWalkingFrame; i++) {\n            let img = new Image();\n            img.src = `./assets/Player_sprites/walking/right/p2_walk${i}.png`;\n            let imgl = new Image();\n            imgl.src = `./assets/Player_sprites/walking/left/p2_walk${i}.png`;\n            this.walkingRightSpriteImgs.push(img)\n            this.walkingLeftSpriteImgs.push(imgl)\n        }\n    }\n\n    draw(ctx) {\n        let drawImage = this.standingRightSprite;\n        if (!this.isGrounded) {\n            if (this.facingRight) {\n                drawImage = this.jumpingRightSprite;\n            } else {\n                drawImage = this.jumpingLeftSprite;\n            }\n        } else if (this.isStopped) {\n            if (this.facingRight) {\n                drawImage = this.standingRightSprite;\n            } else {\n                drawImage = this.standingLeftSprite;\n            }\n        } else if (!this.isStopped) {\n            if (this.facingRight)  {\n                drawImage = this.walkingRightSpriteImgs[this.walkingFrame - 1];\n            } else {\n                drawImage = this.walkingLeftSpriteImgs[this.walkingFrame - 1];\n            }\n        }\n        ctx.drawImage(\n            drawImage,\n            this.posX,\n            this.posY,\n            this.width,\n            this.height,\n        )\n    }\n\n    move(keysPressed) {\n        // if (this.velocityY === 0) this.isJumping = false;\n        console.log(this.posX,this.posY)\n        this.velocityX = 0;\n        this.isStopped = true;\n        if (keysPressed['d'] || keysPressed['ArrowRight']) {\n            this.facingRight = true;\n            this.velocityX = 7;\n        }\n        if (keysPressed['a'] || keysPressed['ArrowLeft']) {\n            this.facingRight = false;\n            this.velocityX = -7;\n        }\n        \n        if (this.velocityX != 0){\n            this.isStopped = false\n            if (this.walkingFrame < this.maxWalkingFrame) {\n                if (this.skipFrame) this.walkingFrame++;\n                this.skipFrame = !this.skipFrame;\n            } else {\n                this.walkingFrame = 1;\n            }\n            this.posX += this.velocityX;\n            if (this.posX > this.maxXValue) {\n                this.posX = this.maxXValue;\n            } else if (this.posX < 0){\n                this.posX = 0;\n            }\n        }\n\n        // Jump /////////////////////////////////////////\n        this.velocityY = -this.gravity;\n        if (keysPressed[' ']) {\n            this.isGrounded = false\n            if(!this.isJumping){\n                this.isJumping = true;\n                this.jumpAcc = this.startingJumpAcc;\n                this.jumpFrameDelay = 0;\n            }\n        }\n        if(this.jumpAcc > 0){\n            this.velocityY -= this.jumpAcc;\n            this.jumpAcc -= 1;\n        } else if (this.jumpAcc === 0) {\n            this.jumpAcc = -1;\n            // this.isJumping = false;\n        }\n        if(this.velocityY != 0){\n            this.posY += this.velocityY;\n        }\n    }\n\n\n\n    resolveMapCollision(mapEl) {\n        let dX = (this.posX + (this.width/2)) - (mapEl.posX + (mapEl.width/2));\n        let dY = (this.posY + (this.height/2)) - (mapEl.posY + (mapEl.height/2));\n        let absX = Math.abs(dX);\n        let absY = Math.abs(dY);  \n        let max_width = (mapEl.width / 2) + (this.width / 2)\n        let max_height = (mapEl.height / 2) + (this.height / 2)\n        let oX = max_width - absX;\n        let oY = max_height - absY;\n        \n        if(oX > 0 && oY > 0){\n            if(oY > oX){\n                if (dX < 0){ // object came from the left\n                    this.posX -= oX;\n                } else { //if (dX > 0) object came from the right\n                    this.posX += oX;\n                }\n            } else {\n                if (dY < 0){ // object came from the top\n                    this.isGrounded = true;\n                    if(this.jumpFrameDelay > 5){\n                        this.isJumping = false;\n                    } else {\n                        this.jumpFrameDelay++;\n                    }\n                    this.posY -= oY;\n                }\n                else { // object came from the bottom\n                    this.posY += oY;\n                }\n            } \n        }\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });