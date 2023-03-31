import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import router from './router'
import {BootstrapVue} from 'bootstrap-vue'
import Vuelidate from 'vuelidate'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrat-vue/dist/bootstrap-vue.css'

//custom css
import "@/assets/scss/main.scss"




const app = createApp(App);

app.use(BootstrapVue);
app.use(Vuelidate);

app.config.productionTip = false;

//Filter
//Capitalizes first character of words

app.filter("capitalize",(val) =>{
    if (!val){
        return "";
    }
    return val.toString().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
})


//prefixes
app.filter("prefix",(val)=>{
    if(!val){
        return "";
    }
    return `Mr. ${val}`;
})


//Parse date into local string
app.filter("parseDate",(val)=>{
    if(!val){
        return "";
    }
    return val.toLocalString("en-US",{weekday:'long',year:'numeric',month:'numeric',day:'numeric'});
})


app.mount('#app');
