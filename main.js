var Vue = require('vue')

Vue.component('cu-button',{
    props:['event','cap'],        
    template: `<button v-on:click=event> {{cap}} </button>`
});

Vue.component('item',{
    props:['name','email','phone','event','id'],
    template:`<div>{{name}} {{email}} {{phone}} <button v-on:click=event(id)> x </button> </div>`
});

Vue.component('customers',{
    mounted:function(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(r => {this.customers = r})
    },
    data:function(){
        return {
            customers: this.customers
        }
    },
    methods:{
        sort:function(){                        
            this.customers.sort((a, b) => {
                var na = a.name.toUpperCase(); 
                var nb = b.name.toUpperCase(); 
                if (na < nb) 
                    return -1;                
                if (na > nb) 
                    return 1;                
                return 0;
            });        
        },
        first: function(){
            this.customers.splice(1,this.customers.length);
        },
        remove: function(idx){            
            this.customers.splice(idx,1)
        }
    },
    template: `<div>
                  <cu-button cap="Sort" v-bind:event=sort></cu-button>
                  <cu-button cap="First" v-bind:event=first></cu-button>
                  <ul v-for="(c, idx) in customers">
                    <item :name=c.name :email=c.email :phone=c.phone :id=idx v-bind:event=remove></item>
                  </ul>
               </div>`
});

var app = new Vue({
    el:'#app'
});