var Vue = require('vue')

Vue.component('cu-button',{
    props:['event','cap'],        
    template: `<button v-on:click=event> {{cap}} </button>`
});

Vue.component('item',{
    props:['name'],
    data:function(){
        return {}
    },
    methods:{

    },
    template:`<div>{{name}} <button>x</button></div>`
});

Vue.component('customers',{
    data:function(){
        return {
            customers: ['x','g','r','a','e']
        }
    },
    methods:{
        sort:function(){
            this.customers.sort();
        },
        first: function(){
            this.customers.splice(0,1);
        }
    },
    template: `<div>
                  <cu-button cap="Sort" v-bind:event=sort></cu-button>
                  <cu-button cap="First" v-bind:event=first></cu-button>
                  <ul v-for="c in customers">
                    <item :name=c></item>
                  </ul>
               </div>`
});

var app = new Vue({
    el:'#app'
});