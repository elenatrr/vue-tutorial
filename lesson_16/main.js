Vue.component('greeting', {
  template: '<div><p>Hi there, dear {{ name }}! I am a reusable component.</p><button @click="changeName">Change Name</button></div>',
  data: function() {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName() {
      this.name = 'Misha'
    }
  }
})

let appOne = new Vue({
    el: '#app-one',
    data: {
      title: 'Vue App One'
    },
    methods: {
    },
    computed: {
      greet() {
        return 'Hello from App One'
      }
    }
})

let appTwo = new Vue({
  el: '#app-two',
  data: {
    title: 'Vue App Two',
    output: 'Pizza?'
  },
  methods: {
    changeTitle() {
      appOne.title = 'The Title Is Changed'
    },
    readRef() {
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    }
  },
  computed: {
    greet() {
      return 'This is App Two'
    }
  }
})

setTimeout(() => {
  appTwo.title = 'Changed From Outside'
}, 3000);