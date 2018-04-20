import  { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import authReducer from '../reducers/auth'
import galleryReducer from '../reducers/gallery'
import galleryFormReducer from '../reducers/galleryForm'
import modalReducer from '../reducers/modal'
import dragReducer from '../reducers/drag'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
	const store = createStore(
		combineReducers({
			auth: authReducer,
			gallery: galleryReducer,
			galleryForm: galleryFormReducer,
			modalId: modalReducer,
			dragId: dragReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

	return store
} 