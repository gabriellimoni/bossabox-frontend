import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './user.store'
import ToolStore from './tool.store'
import TokenStore from './token.store'
import ToolFormStore from './toolForm.store'

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
    toolForm: ToolFormStore,
  }
})
