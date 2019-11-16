import React, { Component, Fragment } from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'

class Top extends Component {
	state = {}

	render() {
		return (
			<Fragment>
				<Header>
					<NavBar data={''} />
				</Header>
			</Fragment>
		)
	}
}

export default Top
