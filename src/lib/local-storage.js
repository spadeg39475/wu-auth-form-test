import store from 'store'

export const saveInfo = (key, value) => store.set(key, value)

export const getInfo = (key) => store.get(key)
