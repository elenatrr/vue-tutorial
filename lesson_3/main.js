let app = new Vue({
    el: '#app',
    data: {
        name: 'John',
        job: 'Ninja'
    },
    methods: {
        greeting: function(time){
            return 'Good' + time + ', ' + this.name;
        }
    }
})