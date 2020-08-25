// import {createRenderer} from '@vue/runtime-core' 
import App from './src/App.js'
import { createApp } from "./src/runtime-canvas";
import { game } from "./src/Game.js";

// console.log(Application)


//初始化game

// console.log(game.stage.addChild,'game');
// document.body.append(game.view);
// App.vue 
// 1.创建根组件

// 2.创建根容器
createApp(App).mount(game.stage)
// createApp(rootComponent).mount('#app')




//实现自定义的renderer

// canvas 和