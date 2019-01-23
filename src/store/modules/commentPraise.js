const state={
     commentList:[],
   };
const getters = {
    getcommentList(state) {
       return state.commentList
    },
};
const mutations = {
    changeStar(state,cid) {
      state.commentList.forEach(item => {
        if (item.id==cid){
          item.praise = !item.praise
        }
      })
    }
};
 const actions = {
    getStar(context,id) {
        context.commit('changeStar',id);
    },
};
export default {
     namespaced:true,
     state,
     getters,
     mutations,
     actions
}
