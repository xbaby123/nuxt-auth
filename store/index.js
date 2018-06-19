import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'
var cookieparser = require('cookieparser')

const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: null,
      user: {
      }
    },
    mutations: {
      update (state, data) {
        state.auth = data
      },
      updateUser (state, user) {
        state.user = user
      }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        let accessToken = null
        let user = null
        if (req.headers.cookie) {
          var parsed = cookieparser.parse(req.headers.cookie)
          if (parsed.auth) {
            accessToken = JSON.parse(parsed.auth)
            user = JSON.parse(parsed.user)
          }
        }
        commit('update', accessToken)
        commit('updateUser', user)
      },
      sendLoginRequest ({ commit }, { username, password }) {
        console.log(username, password)
        return axios.post('https://api-web.spout360.com/v1/auth/login', {username, password}, {})
          .then(response => {
            console.log(response.data)
            commit('update', response.data.access_token)
            commit('updateUser', response.data.user)
            Cookie.set('auth', JSON.stringify(response.data.access_token))
            Cookie.set('user', JSON.stringify(response.data.user))
          })
      }
    }
  })
}

export default createStore
