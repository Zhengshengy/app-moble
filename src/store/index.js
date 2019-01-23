import Vue from 'vue';
import Vuex from 'vuex';
import postPraise from './modules/postPraise'
import commentPraise from './modules/commentPraise'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
         postPraise,
         commentPraise
    }
});
