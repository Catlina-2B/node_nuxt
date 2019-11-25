import Cookies from 'js-cookie'

const app = {
  state(){
	  return {
		  language: Cookies.get('language') || 'zh'
	  }
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      Cookies.set('language', language)
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    }
  }
};

export default app
