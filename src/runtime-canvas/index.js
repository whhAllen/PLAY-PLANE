import { Graphics, Text } from "pixi.js"
import { createRenderer } from '@vue/runtime-core'; 
const  renderer = createRenderer({
    //渲染接口
    createElement(type){
        //基于type 创建 基于 canvas 的元素
        // 创建矩形
        let element; 

        if(type === 'rect'){
            //创建矩形
            element = new Graphics();
            element.beginFill(0xff0000);
            element.drawRect(0,0,500,500)
            element.endFill()
        } else if(type == "circle") {
            // 创建矩形
            element = new Graphics();
            element.beginFill(0xfffff);
            element.drawCircle(0,0,100,100)
            element.endFill() 
        }
        return element;
    },
    patchProp( el, key , prevValue, nextValue) {
        if(key == "x"){
            el.x = nextValue
        }
        if(key == "y"){
            el.y = nextValue
        }
    },
    setElementText( node, text ) {
        const cText = new Text(text)
        node.addChild(cText)
    },
    createText (text) {
        return new Text()
    },
    insert( el, parent) {
        parent.addChild(el);
    },
})
export function createApp(rootComponent){
    return renderer.createApp(rootComponent)
}