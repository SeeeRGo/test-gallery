import uuidv4 from 'uuid/v4'
import database from '../firebase/firebase'

export const ADD_IMAGE = 'ADD_IMAGE'
export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const SET_GALLERY = 'SET_GALLERY'
export const DROP_IMAGE= 'DROP_IMAGE'
export const DRAG_IMAGE= 'DRAG_IMAGE'
// если совсем придираться то GalleryItem более точное название для Image

export const addImage = ({url, comment}) => ({
  type: ADD_IMAGE,
  payload: {
    url,
    comment,
    id: uuidv4()
  }
})

export const startAddImage = ({url = 'https://www.w3schools.com/w3images/lights.jpg' , comment = ''}) => {
  return (dispatch) => {
    return database.collection('gallery').doc(uuidv4()).set({
      url,
      comment
    }).then(() => dispatch(addImage({url, comment})))
  }
}

export const updateImage = (updates, id) => ({
  type: UPDATE_IMAGE,
  id,
  payload: updates
})

export const startUpdateImage = (updates, id) => async dispatch => {
  await database.collection('gallery').doc(id).update(updates)
  dispatch(updateImage(updates, id))
}

export const setGallery = (gallery = []) => ({
  type: SET_GALLERY,
  payload: gallery
}) 

export const getGallery = () => async dispatch => {
  const gallery = []
  const snapshot = await database.collection('gallery').get()
  snapshot.docs.forEach((doc) => gallery.push({
    id: doc.id,
    ...doc.data()
  }))  
  dispatch(setGallery(gallery))
}

export const dragImage = (id) => ({
  type: DRAG_IMAGE,
  payload: id
})

export const dropImage = (id, index) => ({
  type: DROP_IMAGE,
  payload: {
    id,
    index
  }
})