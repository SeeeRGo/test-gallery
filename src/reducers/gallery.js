import { ADD_IMAGE, UPDATE_IMAGE, SET_GALLERY, DROP_IMAGE, DRAG_IMAGE } from "../actions/gallery";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return [...state, action.payload]
    case UPDATE_IMAGE:
      return state.map(item => {
        return item.id !== action.id ? item :
          {
            ...item,
            ...action.payload
          }
      })
    case DROP_IMAGE:
      const newState = state.filter(item => item.id !== action.payload.id)
      const movedItem = state.filter(item => item.id === action.payload.id)
      const preIndex = newState.slice(0, action.payload.index)
      const postIndex = newState.slice(action.payload.index)
      return [...preIndex, ...movedItem, ...postIndex]
      return state
    case SET_GALLERY:
      return action.payload
    default:
      return state
  }
}