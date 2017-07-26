import {FETCH_NOW_PLAYING_FILMS, FETCH_COMING_SOON_FILMS, FETCH_SWIPER_DATA, FETCH_FILMS_DESC} from './mutations-type'

const mutations = {
	[FETCH_NOW_PLAYING_FILMS](state, data){
//		state.nowPlayingFilms = data;
		state.nowPlayingFilms = state.nowPlayingFilms.concat(data.films);
		state.nowPlayingPage = data.page;
//		console.log(state.nowPlayingPage)
//		console.log(state.nowPlayingFilms);
	},
	[FETCH_COMING_SOON_FILMS](state, data){
//		state.comingSoonFilms = data;
		state.comingSoonFilms = state.comingSoonFilms.concat(data.films);
		state.comingSoonPage = data.page;
//		console.log(data)
//		console.log(state.comingSoonPage)
//		console.log(state.comingSoonFilms);
	},
	[FETCH_SWIPER_DATA](state, data){
		state.swiperData = data;
//		console.log(state.swiperData);
	},
	[FETCH_FILMS_DESC](state, data){
		state.filmDesc = data;
//		console.log(state.filmDesc);
	}
	
}

export default mutations
