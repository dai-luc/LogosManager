export const state = () => ({
  message: 'Hello!'
})

export const mutations = {
  // eslint-disable-next-line object-shorthand
  updateMessage: function (state, payload) {
    state.message = payload
  }
}

export const actions = {
  updateMessageAction (context) {
    context.commit('updateMessage', 'Commit with payload from Hello.js')
  }
}
