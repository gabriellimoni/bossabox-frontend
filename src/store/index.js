import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './user.store'
import ToolStore from './tool.store'
import TokenStore from './token.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: UserStore,
    tool: ToolStore,
    token: TokenStore,
  }
})
