export const state = () => ({
  id: 0,
  title: 'unknown',
  price: 0,
})

export const actions = {
  load({commit}) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('update', {id: 1, title: 'Product', price: 99.99})
        resolve()
      }, 1000)
    })
  }
}

export const mutations = {
  update(state, product) {
    Object.assign(state, product)
  },
}
