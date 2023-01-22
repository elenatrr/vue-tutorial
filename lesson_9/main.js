let app = new Vue({
    el: '#app',
    data: {
        name:'',
        age: '',
        a: 0,
        b: 0
    },
    methods: {
        logName() {
            console.log("log name")
        },
        logAge() {
            console.log("log age")
        }
    },
    computed: {
        addToA() {
            console.log("add to A")
            return 10 + this.a
        },
        addToB() {
            console.log("add to B")
            return 10 + this.b
        }
    }
})