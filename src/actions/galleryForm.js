export const UPDATE_FORM = 'UPDATE_FORM'
export const OPEN_FORM = 'OPEN_FORM'
export const CLOSE_FORM = 'CLOSE_FORM'

const emptyForm = {
  url: '',
  comment: '',
  isOpened: false
}

export const updateForm = (formName, fieldName, value) => ({
  type: UPDATE_FORM,
  formName,
  payload: {
    [fieldName]: value
  }
})

export const openForm = (formName, initialState = emptyForm) => ({
  type: OPEN_FORM,
  formName,
  payload: {
    ...initialState,
    isOpened: true
  }
})
export const closeForm = (formName) => ({
  type: CLOSE_FORM,
  formName,
  payload: emptyForm
})