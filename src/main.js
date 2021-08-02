import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

require('@/assets/main.scss')

Vue.config.productionTip = false

 var firebaseConfig = {
    apiKey: "AIzaSyArjsLvmjcEWN4VlQ1F6qzQ8aUalrWuBdI",
    authDomain: "lsbboard.firebaseapp.com",
    projectId: "lsbboard",
    storageBucket: "lsbboard.appspot.com",
    messagingSenderId: "492496397386",
    appId: "1:492496397386:web:41cbe093b202ecfc5ef2b3",
    measurementId: "G-VF79SL0N4N"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
