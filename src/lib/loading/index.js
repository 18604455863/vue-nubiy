import Loading from "./index.vue";
import Vue from "vue";

class LoadingComponent {
    constructor(){
        this.init()
    }
    init(){
        let Vm = Vue.extend(Loading)

        this.vm = new Vm({
            el:documet.createElement("div")
        })
    }
    open(){
        document.body.appendChild(this.vm.$mount().$el)
    }
    open(){
        document.body.appendChild(this.vm.$mount().$el)
    }
}

export default new LoadingComponent()