import router from '../../router'
import axios from 'axios'
import { setCookie } from './../../cookies'

export default {
  login ({ commit }, { email, password }) {
    debugger
    console.log('in login')
    const url = 'http://10.177.68.101:9601/user/authenticate'
    axios.post(url, { email: email, password: password }).then(function (response) {
      console.log(response.response)
      if (response.data.response === 1) {
        setCookie('userID', response.data.userID, 100)
        commit('setUserData', response)
        router.push('/')
      } else {
        alert('Wrong id and Password')
        router.push('/')
      }
    })
      .catch(function (error) {
        console.log(error)
        alert('Wrong id and Password')
        router.push('/')
      })
  },
  register ({ commit }, { email, name, password }) {
    console.log(commit)
    const url = 'http://10.177.68.101:9601/user/save'
    axios.post(url, { email: email, name: name, password: password }).then(function () {
      router.push('/login')
    })
    router.push('/login')
  }
}
