import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase/app';
import 'firebase/firestore'
import {firestorePlugin} from 'vuefire' 

Vue.use(firestorePlugin)

Vue.config.productionTip = false;
const config ={
    apiKey: "AIzaSyCWGqF_EhPuMoE_kgPfPYsUs9CY-JTlVvU",
    authDomain: "pwa-example-a8533.firebaseapp.com",
    databaseURL: "https://pwa-example-a8533.firebaseio.com",
    projectId: "pwa-example-a8533",
    storageBucket: "gs://pwa-example-a8533.appspot.com",
    messagingSenderId: "1051232963785",
    appId: "1:1051232963785:web:81698beae01597c421d118"
}

firebase.initializeApp(config);
Vue.config.productionTip = false

export const db = firebase.firestore()

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BIlgjIHDPN4ojsKU78fb7XJWMa_oL-Sk7J6rD4-y7fmH5fsYgDoYZPDtcxgKRpAazBsT4rRVkmsrYq_X6S3wl3k");

messaging.requestPermission().then(() =>{
  console.log('notificacion permisos granted.');

  messaging.getToken().then((token)=> {
    console.log(token)
  });

}).catch((err) =>{ 
console.log('error => ',err); 
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
