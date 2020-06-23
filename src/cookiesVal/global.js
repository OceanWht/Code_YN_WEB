export default {
  install(Vue){
    Vue.prototype.$software_url = 'https://8008.chinadny.com/restful/';
    Vue.prototype.$baseUrl='http://7000.chinadny.com/yn-nhjc';
    //Vue.prototype.$baseUrl='http://localhost:8081/yn-nhjc';
    Vue.prototype.$config = {
      "headers": {'Content-Type': 'application/json;charset=UTF-8'}
    }
  }
}

