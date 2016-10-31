var Vue = require('vue')

Vue.component('my-app', {
  props: ['lol'],  
  template: '<div> Lol {{lol}}</div>'
})

var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})