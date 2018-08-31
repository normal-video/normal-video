import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  user: {
  }
}

const mutations = {
  updateUser (state, user) { // 用户信更新
    state.user = user
  }
}

const actions = {
  getUserInfo ({comit}) {
    Vue.http.get('./userInfo').then(res => console.log(res, 'ssssss'))
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
