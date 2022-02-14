import auth from "@/api/auth"

const state = {
  user: null,
  isLogin: false
}
const getters = {
  user: (state) => { return state.user },
  isLogin: (state) => { return state.isLogin },
}
const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },
  setIsLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}
const actions = {
  async login({ commit }, { username, password }) {
    let res = await auth.login({ username, password })
    commit('setUser', { user: res.data })
    commit('setIsLogin', { isLogin: true })
    return res.data
  },
  async logout({commit}) {
    await auth.logout()
    commit('setUser', { user: null })
    commit('setIsLogin', { isLogin: false })

  },
  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    // commit('setUser', { user: res.data })
    // commit('setIsLogin', { isLogin: true })
    return res.data
  },
  async checkLogin({ commit, state }) {
    if (state.isLogin) return true
    try{
      let res = await auth.getInfo()
      commit('setIsLogin', { isLogin: res.isLogin })
      commit('setUser', { user: res.data })
      return true
    }catch(err){
      return false
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
