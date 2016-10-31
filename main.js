var Vue = require('vue')

Vue.component('my-app', {
  props: ['lol','ice'],  
  filters:{
      dash: (val) => {          
          return `${val} --`
      }
  },
  template: '<div>{{lol | dash}} {{ice | dash}}</div>'
})


Vue.component('listing', {
    props: ['item'],
    template: '<ul>{{item}}</ul>'
})

Vue.component('nice-com',{
    mounted: function () {     
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(r => {
            this.customers = r
        })                   
    },
    data: function(){
        return { 
            list: [1,2,3,4,5],
            customers: this.customers
        }
    },
    template: `<div>
                <ul>
                <template v-for="item in customers">                
                    <li>{{ item.name }}</li>                                
                </template>
                </ul>
              </div>`
})

Vue.component('an-com', {    
  methods:{
      handleClick: () => {
          alert('lol')
      },
      openWindow: () => {
          window.open('http://www.google.com')
      }
  },
  template: '<button v-on:click="openWindow">Click</button>'
})


var app = new Vue({
  el: '#app'
})