import React from 'react'
import Home from './containers/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const AppRouter = () => {
	let [ state, setState ] = useState()

	return (
		<Router>
			<Route exact path={'/'}>
				<Home {...props} />
			</Route>
			<Route exact path={'/results'} component={Home} />
			<Route exact path={'/checkout'} component={Home} />
		</Router>
	)
}

export default AppRouter
