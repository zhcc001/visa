import store from 'store2'

const doveTravelStore = store.namespace('langtt')

export const storeLocal = doveTravelStore

export const storeSession = doveTravelStore.session
