const state={
     postsList:[],
   };
const getters = {
    getPostsList(state) {
       return state.postsList
    },
};
const mutations = {
    changeStar(state,pid) {
      state.postsList.forEach(item => {
        if (item.id==pid){
          item.praise = !item.praise
        }
      })
    }
};
 const actions = {
    getStar(context,pid) {
        context.commit('changeStar',pid);
    },
};
export default {
     namespaced:true,
     state,
     getters,
     mutations,
     actions
}
