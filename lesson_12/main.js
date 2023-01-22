let app = new Vue({
    el: '#app',
    data: {
        red: false,
        add: false,
        greeting: true,
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ron', age: 20 },
            { name: 'Ben', age: 24 },
            { name: 'John', age: 27 },
        ]
    },
    methods: {
    },
    computed: {
        computedClass() {
            return {
                red: this.red,
                add: this.add
            }
        }
    }
})