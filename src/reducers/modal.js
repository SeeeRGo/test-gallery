import { SET_MODAL_INFO } from '../actions/modal'
// Понятно что для читабельности нужен отдельный RESET action но мне было лень

export default (state = null, action) => {
  switch(action.type) {
    case SET_MODAL_INFO:
      return action.payload
    default:
      return state
  }
}