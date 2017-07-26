import axios from 'axios'
const _get = ({url, query}, commit) => {
	// 隐藏加载数据图标
	commit('HIDE_LOADING', true);
	let _url;
	if(query){
		_url = `http://localhost:8080/v4/api${url}?${query}`;
	}else{
		_url = `http://localhost:8080/v4/api${url}`;
	}
	return axios.get(_url)
		.then((res) => {
			if(res.status >= 200 && res.status < 300){
				
				// 显示加载数据图标
				commit('SHOW_LOADING', false);
				return res.data;
			}
			return Promise.reject(new Error(res.status));
		})
}

// 获取轮播图的数据
export const fetchSwiperData = ({commit}) => {
	const url = '/billboard/home';
	const query = '_t' + new Date().getTime();
	return _get({url, query}, commit)
		.then((json) => {
			if(json.status === 0){
				return commit('FETCH_SWIPER_DATA', json.data.billboards);
			}
			return Promise.reject(new Error('FETCH_SWIPER_DATA failure'))
		})
}

// 获取正在上映的数据
export const fetchNowPlayingData = ({commit}, pageArr) => {
	let page = pageArr[0];
	let count = pageArr[1];
	const url = '/film/now-playing';
	const query = `count=${count}&page=${page}&_t` + new Date().getTime();
	return _get({url, query}, commit)
		.then((json) => {
			if(json.status === 0){
				return commit('FETCH_NOW_PLAYING_FILMS', json.data);
			}
			return Promise.reject(new Error('FETCH_NOW_PLAYING failure'))
		})
}

// 获取即将上映的数据
export const fetchComingSoonData = ({commit}, pageArr) => {
	let page = pageArr[0];
	let count = pageArr[1];
	const url = '/film/coming-soon';
	const query = `count=${count}&page=${page}&_t` + new Date().getTime();
	return _get({url, query}, commit)
		.then((json) => {
			if(json.status === 0){
				return commit('FETCH_COMING_SOON_FILMS', json.data);
			}
			return Promise.reject(new Error('FETCH_COMING_SOON_FILMS failure'))
		})
}

// 获取电影详情页的数据
export const fetchFilmsDescData = ({commit},id) => {
	const url = '/film/' + id;
	const query = '_t' + new Date().getTime();
	return _get({url, query}, commit)
		.then((json) => {
			if(json.status === 0){
				return commit('FETCH_FILMS_DESC', json.data.film);
			}
			return Promise.reject(new Error('FETCH_FILMS_DESC failure'))
		})
}