const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },
    methods: {
        updateCart(){
            this.cart +=1
        },
        removeItem(){
            this.cart -=1
        }
    }
})
