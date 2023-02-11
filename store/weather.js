export const state = () => ({
  city: 'London',
  weather: {}
})

export const mutations = {
  setCity(state, payload) {
    state.city = payload
  }
}
