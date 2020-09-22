import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';
// import Ninjas from './Ninjas.vue';
// Vue.component('ninjas',Ninjas); //Globally register a component
//event bus

export const bus = new Vue();

Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
routes: Routes
});
Vue.directive('rainbow',{
bind(el, binding, vnode){
  // el.style.color = "#"+ Math.random().toString().slice(2,8);
}
});
//Directives 
Vue.directive('theme',{
bind(el, binding, vnode){
  if(binding.value == 'wide'){
    el.style.maxWidth = "90vw";
  }
  if(binding.arg == 'column'){
    el.style.maxWidth = "50vw";
  }
}
});

//Filters 
// Vue.filter('to-uppercase',function(value){
//  return value.toUpperCase();
// })
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
