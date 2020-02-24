export const state = () => ({
  palindorome: '',
  raw: ''
})

export const mutations = {
  // eslint-disable-next-line object-shorthand
  updateLogos: function (state, payload) {
    state.palindorome = payload
  }
}

export const actions = {
  updateLogosAction (context) {
    context.commit('updateLogos', function () {
      return state.palindorome + state.palindorome.split('').reverse().join('')
    })
  }
}
