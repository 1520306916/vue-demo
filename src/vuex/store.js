import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state : {
    author : 'hello world',
  },
  mutations : {
    newAuthor (state, index) {
      state.author = index;
    }
  },
  getters :{},
})

export default store;