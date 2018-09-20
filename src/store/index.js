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
  getUserInfo ({commit}) {
    Vue.http.get('./user').then(res => commit('updateUser', res.data))
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
