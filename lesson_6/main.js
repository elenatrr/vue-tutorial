let app = new Vue({
    el: '#app',
    data: {
        name: 'John',
        job: 'Ninja',
        website: 'http://google.com',
        websiteTag: '<a href="http://google.com">Google via tag</a>',
        age: 22,
        x: 0,
        y: 0,
        event: ""
    },
    methods: {
        greeting: function(time){
            return 'Good' + time + ', ' + this.name;
        },
        addYear(inc){
            this.age += inc;
        },
        subtractYear(dec){
            this.age -= dec;
        },
        updateXY(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click(){
            this.event = "was clicked";
        }
    }
})