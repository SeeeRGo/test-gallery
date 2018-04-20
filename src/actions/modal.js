export const SET_MODAL_INFO = 'SET_MODAL_INFO'

export const setModalInfo = (id = null) => ({
  type: SET_MODAL_INFO,
  payload: id
})