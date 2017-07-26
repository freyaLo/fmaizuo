import {CHANGE_LEFTNAV_STATE, HIDE_LOADING, SHOW_LOADING} from './mutations-type'

const mutations = {
	[CHANGE_LEFTNAV_STATE](state, isShow){
		state.leftNavState = isShow;
	},
	[HIDE_LOADING](state, flag){
//		console.log(state.loading);
		state.loading = flag;
	},
	[SHOW_LOADING](state, flag){
//		console.log(state.loading);
		state.loading = flag;
	},
}

export default mutations
