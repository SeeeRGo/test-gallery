import { UPDATE_FORM, OPEN_FORM, CLOSE_FORM } from '../actions/galleryForm'

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          ...action.payload
        }
        // Чтоб не путаться в такой фигне существуют пользительные библиотеки типа redux-form
        // или хотя бы lodash
      }
    case OPEN_FORM:
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          ...action.payload
        } 
      }
    case CLOSE_FORM:
      return {
        ...state,
        [action.formName]: action.payload
      }
    default:
      return state
  }
}