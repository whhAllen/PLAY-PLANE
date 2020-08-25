// vue3
import { defineComponent, h} from '@vue/runtime-core'
import Circle from './components/Circle'

// template ---> render
export default defineComponent({
    render(){
        // <div x="100", y="100">huaxianb</div>
        const vnode = h("rect", { x: 100, y: 100}, [
            "huaxianb",
            h(Circle)
        ]);
        return vnode;
    }
})