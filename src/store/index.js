import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    task: {
      id: "",
      name: "",
      email: "",
      message: "",
    }
  },
  mutations: {
    set(state, payload) {
      //Put tasks inside array
      state.tasks.push(payload)
      console.log(state.tasks)
    }
  },
  actions: {
    setTasks({ commit }, task) {
      commit('set', task)
    }
  },
  modules: {
  }
})