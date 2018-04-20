import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Header from './../components/Header'
import Dashboard from './../components/Dashboard'
import NotFoundPage from './../components/NotFoundPage'
import Login from './../components/Login'
import Gallery from './../components/Gallery'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory()

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={Login} exact={true}/>
				<PrivateRoute path="/dashboard" component={Dashboard} />
				<PrivateRoute path="/gallery" component={Gallery} />
				<Route component={NotFoundPage}/>
			</Switch>
		</div>		
	</Router>
	)

export default AppRouter
