import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 2,
    listTask: [{ id: 1, description: 'Make Coffee', completed: false },
    { id: 2, description: 'Feed Dragons', completed: false }],
  },
  mutations: {
    addTask (state, task: any) {
      state.listTask.push(task);
      state.count++;
    },
    addTaskCompleted (state, id: number) {
      for (var i = 0; i < state.listTask.length; i++){
        if (state.listTask[i].id == id){
          if(state.listTask[i].completed == true)
          {
            state.count++;
            state.listTask[i].completed = false;
          }else{
            state.count--;
            state.listTask[i].completed = true;
          }
        }
      }
    }
  },
  actions: {
    increment ({commit}) {
      commit('increment')
    },
    decrement ({commit}) {
      commit('decrement')
    }
  },
  modules: {
  }
})
