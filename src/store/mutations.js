import * as types from './mutation-types'
import {storeSession, storeLocal} from './storage.js'

const mutations = {
  [types.SET_TRANSITIONNAME](state, transitionName) {
    state.transitionName = transitionName
  },

}

export default mutations
