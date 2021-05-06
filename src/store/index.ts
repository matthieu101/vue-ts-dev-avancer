import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 2,
    listTask: [{ id: 0, description: 'Make Coffee', completed: false },
      { id: 1, description: 'Feed Dragons', completed: false }]
  },
  mutations: {
    addTask (state, description: string) {
      state.listTask.push({ id: state.listTask.length, description: description, completed: false });
      state.count++;
    },
    addTaskCompleted (state, id: number) {
      for (let i = 0; i < state.listTask.length; i++) {
        if (state.listTask[i].id === id) {
          if (state.listTask[i].completed === true) {
            state.count++;
            state.listTask[i].completed = false;
          } else {
            state.count--;
            state.listTask[i].completed = true;
          }
        }
      }
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    decrement ({ commit }) {
      commit('decrement')
    }
  },
  modules: {
  }
})
