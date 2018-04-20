import { DRAG_IMAGE, DROP_IMAGE } from '../actions/gallery'

export default (state = null, action) => {
  switch(action.type) {
    case DRAG_IMAGE:
      return action.payload
    case DROP_IMAGE:
      return null
    default:
      return state
  }
}