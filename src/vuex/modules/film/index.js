import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
	nowPlayingFilms: [],
	nowPlayingPage: {},
	comingSoonFilms: [],
	comingSoonPage: {},
	swiperData: [],
	filmDesc: []
	
}

export default {state, actions, getters, mutations};
